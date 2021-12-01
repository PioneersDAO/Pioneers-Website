import Head from 'next/head'
import Nav from '../components/nav'
import HeroHeader from '../sections/HeroHeader'
import WhitePaper from '../sections/WhitePaper'

export default function Home() {
  return (
    <div className="bg-purple-dark">
      <Head>
        <title>Pioneers DAO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav/>
        <HeroHeader/>
        <WhitePaper/>
        

      </main>
    </div>
  )
}
