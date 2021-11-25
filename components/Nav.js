import Link from "next/link"
import { useMoralis, useMoralisQuery } from 'react-moralis'
import router, { useRouter } from "next/router"
import { useEffect } from "react"

export default function Nav(){

    const {data, error, isLoading} = useMoralisQuery('PolygonTokenBalance')
    
    const { authenticate, isAuthenticated, setUserData, user} = useMoralis()

    useEffect(()=>{
        if(user){
            const filteredData = data.filter(data => data.get('address') == user.get('accounts')[0])
            console.log(filteredData)
            console.log("account", user.get('accounts') )
        }
     
    }, user)

    function auth(){

        authenticate({
            signingMessage: "You are signing to PioneersDAO! Your journey starts here!",
            onError: ()=> alert("Signature refused"),
            onComplete: ()=> { console.log(user) }
        })
        

    }

    function checkFirstSignup(){
       console.log(user)
     
    }
    
    return(
        <nav className='flex items-center flex-wrap bg-purple-dark p-5'>
        <div className='flex w-full'>
            <div className='flex flex-grow'>
                <h2 className="text-white text-xl">Pioneers</h2>
            </div>
            <div className=" flex justify-end">
                <div className='flex text-lg'>
                    <Link  href="/nft-redeem"><a className="block  text-white mr-8 ">White Paper</a></Link>
                    <Link  href="/nft-redeem"><a className="block text-white mr-8">Learn</a></Link>
                    <Link  href="/nft-redeem"><a className="block text-white mr-16">Docs</a></Link>
                </div>
                <div className="px-16 py-2 bg-purple-light text-white rounded-sm">
                    <a onClick={auth}href="#">Connect</a>
                </div>
            </div>
        </div>
        </nav>
    )
}