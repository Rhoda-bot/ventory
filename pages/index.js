import Head from 'next/head'
import Footer from './reusables/footer'

import Header from './reusables/header'
import Banner from './home/banner'
import Products from './products'
import ProductCard from './products/product-cards'


export default function Home() {
  return (
    <>
 
     <Header />
     <Banner />
      <Products />
      <ProductCard />
     <Footer />
    </>
  )
}
