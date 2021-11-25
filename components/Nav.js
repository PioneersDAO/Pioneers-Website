import Link from "next/link"
import { useMoralis, useMoralisQuery } from 'react-moralis'
import router, { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Nav(){

    const {data, error, isLoading} = useMoralisQuery('PolygonTokenBalance')
    
    const { authenticate, isAuthenticated, setUserData, logout, user } = useMoralis()

 

    const [filteredData, setFilteredData] = useState()

    useEffect(()=>{
        if(user){
            checkFirstSignup()
        }
    },[user])

    function auth(){

        authenticate({
            signingMessage: "You are signing to PioneersDAO! Your journey starts here!",
            onError: ()=> alert("Signature refused"),
        })
        

    }

    function checkFirstSignup(){
        
        if(!user.get('hasOnboarded')){
            
            console.log('checking signup', data)
            const tempData = data.filter(data => data.get('address') == user.get('accounts')[0])
            setFilteredData(tempData)
            if(filteredData && filteredData.length >0){
                setUserData('hasOnboarded', 'false'); //will be true
                router.push('/whitepaper')
            }else{
                router.push('/quests')
            }
        }
    }
    
    return(
        <nav className='flex items-center flex-wrap bg-purple-dark p-5'>
        <div className='flex w-full'>
            <div className='flex flex-grow'>
                <a href='/'><h2 className="text-white text-xl">Pioneers</h2></a>
            </div>
            <div className=" flex justify-end">
                <div className='flex text-lg'>
                    <Link  href="/whitepaper"><a className="block  text-white mr-8 ">White Paper</a></Link>
                    <Link  href="/quests"><a className="block text-white mr-8">Learn</a></Link>
                    <Link  href="/"><a className="block text-white mr-16">Docs</a></Link>
                </div>
                <div className="px-16 py-2 bg-purple-light text-white rounded-sm">
                    { isAuthenticated ?
                        
                        <a onClick={() => logout()}href="#">logout</a>:
                        <a onClick={auth}href="#">Connect</a>
                    }
                </div>
            </div>
        </div>
        </nav>
    )
}