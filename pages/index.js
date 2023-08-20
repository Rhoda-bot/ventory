import Head from 'next/head'
import Image from 'next/image'
import Navbar from './reusables/menuBar'
import Banner from './home/hero'
import Services from './services'
import Footer from './reusables/footer'


export default function Home() {
  return (
    <>
     <Navbar />
     <Banner />
     <Services />
     <Footer />
    </>
  )
}
