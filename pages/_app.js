import '../styles/main.scss'
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({ subsets: ['latin'] })


function MyApp({ Component, pageProps }) {
  <style jsx global>{`
  html {
    font-family: ${nunito.style.fontFamily};
  }
`}</style>
  return <Component {...pageProps} />
}

export default MyApp
