import Header from "../reusables/header";
import Toolbar from "../reusables/toolbar";
import { useRouter } from "next/router";
import productData from '../utility/product_list.json'
import { useState } from "react";
import Link from "next/link";
import Footer from "../reusables/footer";

const ShopProducts = () => {
    const router = useRouter();
    const shopPath = router.query.shopPath;
    const [allProducts, setAllProducts] = useState(productData);

    return(
        <>
        <Header />
            <div className="shop">
                <div className="container">
                    <div className="row">
                     <h3>Product: {shopPath}</h3>
                         {
                            allProducts.filter(({id,slug}) => (slug === shopPath)).map(({id, image, name}) => (
                                <>
                                    <div className="col-md-3 col-lg-4 p-3" key={id}>
                                       <Link href={`/shop/${shopPath}/${id}`}>
                                        <div className="card p-2">
                                             <img src={image} className="rounded" alt="image"/>
                                                <div className="text-center">
                                            <span>{name}</span>
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
export default ShopProducts;