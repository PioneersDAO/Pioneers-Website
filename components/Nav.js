import Link from "next/link"
import { useMoralis } from 'react-moralis'
import router, { useRouter } from "next/router"

export default function Nav(){


    const { authenticate, isAuthenticated, setUserData, user} = useMoralis()
    function auth(){

        authenticate({
            signingMessage: "You are signing to PioneersDAO! Your journey starts here!",
            onError: ()=> alert("Signature refused"),
            onComplete: ()=> { if(!user.hasOnboarded) router.push('/whitepaper') }
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