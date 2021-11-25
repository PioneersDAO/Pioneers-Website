import Head from 'next/head'

import Nav from '../components/nav'
import WhitePaper from '../sections/WhitePaper'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <WhitePaper/>

      </main>
    </div>
  )
}
