import router from "next/router"

export default function WhitePaper(){
    return(
        <>
            <div><h1>White paper</h1></div>
            <button onClick={()=>{ router.push("/nft-redeem")}}>Redeem Nft</button>
        </>
    )
}