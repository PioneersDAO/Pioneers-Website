import 'tailwindcss/tailwind.css'
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider appId={process.env.APP_ID} serverUrl={process.env.MORALIS_SERVER}>
    <Component {...pageProps} />
  </MoralisProvider>
  )
  
}

export default MyApp
