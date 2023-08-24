import Script from 'next/script';
import '../styles/main.scss'
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({ subsets: ['latin'] })


function MyApp({ Component, pageProps }) {
  <style jsx global>{`
  html {
    font-family: ${nunito.style.fontFamily};
  }
`}</style>
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"/>
      <Script
      id="bootstrap-cdn"
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous" />
      <Script src="https://kit.fontawesome.com/a0b0dcdc1c.js" crossorigin="anonymous"/>
      <Component {...pageProps} />
    </>

  )
  
}

export default MyApp
