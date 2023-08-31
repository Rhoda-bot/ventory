import { useRouter } from "next/router";
import Header from "../reusables/header";
import { useState } from "react";
import productData from '../../utility/product_list.json'
import Link from "next/link";
import Footer from "../reusables/footer";

const ShopItems = () => {
    const router = useRouter();
    const {shopPath} = router.query || [];
    // console.log("shopPath", shopPath);
    const [allPrproductDataoducts] = useState(productData);
    console.log(shopPath[0]);

    const filteredProducts = productData.filter(({ slug }) => slug === shopPath?.length < 1 ? '' : shopPath[0]); ///
    return(
        <>
            <Header />
            
            <div className="">
                <div className="container">
                    <div className="row">
                        {productData?.length === 0 ? (
                            <p>No products found</p>
                        ) :
                        productData && productData.filter((val) => (val.id == shopPath[1])).map(({id, image, name}) => (
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
                                            <Link href={`/shop/${shopPath[0]}/${id}`}>
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