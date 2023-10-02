import { useState } from "react";
import Header from "../reusables/header";
import productData from '../../utility/product_list.json'
import Link from "next/link";
import Footer from "../reusables/footer";


const Collections = () => {
    const [allCollections, setAllCollections] = useState(productData);
    console.log(allCollections);
    return(
        <>
        <Header />
            <div className="shop">
                <div className="container py-3">
                    <div className="row py-3">
                       <div className="products__cards">
                            {
                               allCollections && allCollections.map(({id,name,image,linkUrl})=> (
                                    <>
                                    <div className='p-3' key={id}>
                                        <Link href={linkUrl}>
                                            <div className='card border-0 products__description'>
                                                <div key={id}>
                                                    <img src={image} className='img-fluid'/>
                                                    <div className='card-body products__description--text'>
                            
                                                        {/* <h3>{name}</h3> */}
                                                        {/* <p>lorem</p> */}
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
            </div>
            <Footer />
        </>
    )   
}
export default Collections