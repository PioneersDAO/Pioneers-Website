import Head from 'next/head'

import Nav from '../components/nav'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav>
          <h2>test</h2>
        </Nav>
      </main>
    </div>
  )
}
