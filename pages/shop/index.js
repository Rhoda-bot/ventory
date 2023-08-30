import { useState } from "react";
import Header from "../reusables/header";
import productData from '../utility/product_list.json'
import Link from "next/link";
import Footer from "../reusables/footer";

const Shop = ( ) => {
    const [allProducts, setAllProducts] = useState(productData);
    return(
        <>
           <Header />
            <div className="shop">
                <div className="container py-3">
                    <div className="row py-3">
                        {
                                allProducts && allProducts.map(({id,name,image,linkUrl})=> (
                                    <>
                                    <div className='col-xs-6 col-sm-6 col-md-3 col-xl-4 p-3' key={id}>
                                        <Link href={linkUrl}>
                                            <div className='card border-0 products__description'>
                                                <div key={id}>
                                                    <img src={image} className='img-fluid'/>
                                                    <div className='card-body products__description--text'>
                            
                                                        <h3>{name}</h3>
                                                        <p>lorem</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    </>
                                ))
                            }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Shop