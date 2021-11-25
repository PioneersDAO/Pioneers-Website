import Head from 'next/head'

import Nav from '../components/nav'

import Whitepaper from "../sections/whitepaper";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Pioneers DAO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Whitepaper />
    </div>
  )
}
