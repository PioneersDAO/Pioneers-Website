import Link from "next/link"

export default function Nav(){
    return(
        <nav>
            <li>
                <Link href="nft-redeem"><a>page #3</a></Link>
                <Link href="#"><a>page #2</a></Link>
                <Link href="#"><a>page #3</a></Link>
            </li>
        </nav>
    )
}