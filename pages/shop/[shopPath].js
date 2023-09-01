import Header from "../reusables/header";
import Toolbar from "../reusables/toolbar";
import { useRouter } from "next/router";
import productData from '../../utility/product_list.json'
import { useState } from "react";
import Link from "next/link";
import Footer from "../reusables/footer";

const ShopProducts = () => {
    const router = useRouter();
    const shopPath = router.query.shopPath;
    const [allProducts, setAllProducts] = useState(productData);
    
    const handleSaveToLocalStore = (id, slug) => {
      localStorage.setItem('storeDetails', JSON.stringify({id, slug}));
      router.push(`/shop/${shopPath}/${id}`);
    }

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
                                       <button onClick={() => handleSaveToLocalStore(id, shopPath)}>
                                        <div className="card p-2">
                                             <img src={image} className="rounded" alt="image"/>
                                                <div className="text-center">
                                            <span>{name}</span>
                                            </div>
                                        </div>
                                       </button>
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