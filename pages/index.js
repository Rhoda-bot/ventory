import Head from 'next/head'
import Services from './services'
import Footer from './reusables/footer'

import Header from './reusables/header'
import Banner from './home/banner'
import Products from './products'


export default function Home() {
  return (
    <>
 
     <Header />
     <Banner />
      <Products />
     <Services />
     <Footer />
    </>
  )
}
