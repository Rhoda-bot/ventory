import { useRouter } from "next/router";
import Header from "../reusables/header";
import { useState } from "react";
import productData from '../utility/product_list.json'
import Link from "next/link";
import Footer from "../reusables/footer";

const ShopItems = () => {
    const router = useRouter();
    const {shopPathId} = router.query;
    const [allProducts] = useState(productData);

    const filteredProducts = allProducts.filter(({ slug }) => slug === shopPathId[0]);
    return(
        <>
            <Header />
            
            <div className="">
                <div className="container">
                    <div className="row">
                        {allProducts.length === 0 ? (
                            <p>No products found</p>
                        ):
                            allProducts.filter((val) => (val.id == shopPathId[1])).map(({id, image, name}) => (
                                <>
                                    <div className="col-md-7 " key={id}>
                                        <div className="card border-0" style={{
                                            boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px'
                                        }}>
                                            <img src={image} className="img-fluid rounded"/>
                                        </div>
                                    </div>
                                </>
                            ))
                         }
                         <div className="col-md-5">
                            <h3> Description</h3>
                         </div>
                    </div>
                    <div className="row mt-4  py-5">
                         <h1>Other Similar Products</h1>
    
                         {
                            filteredProducts.length === 0 ? (
                                <p>No products found.</p>
                            ) : (
                               <>
                                    {filteredProducts.map(({ id, image, name }) => (
                                        <div className="col-sm-6 col-md-3 col-lg-4 p-3" key={id}>
                                            <Link href={`/shop/${shopPathId[0]}/${id}`}>
                                                <div className="card p-2 border-0 products__description">
                                                    <img src={image} className="rounded" alt="image" />
                                                    <div className="">
                                                        <span>Price: $00</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                               </>
                            )
                         }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ShopItems;