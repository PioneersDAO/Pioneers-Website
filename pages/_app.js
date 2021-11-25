import 'tailwindcss/tailwind.css'
import { MoralisProvider } from "react-moralis"
import "../styles/globals.css"
import Nav from '../components/nav'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider appId={process.env.APP_ID} serverUrl={process.env.MORALIS_SERVER}>
    <Nav />
    <Component {...pageProps} />
  </MoralisProvider>
  )
  
}

export default MyApp
