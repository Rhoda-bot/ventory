import Header from "../reusables/header";
import { useRouter } from "next/router";
import productData from '../../utility/product_list.json'
import { useState } from "react";
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
                    <div className="row py-5">
                     <h3>Product: {shopPath}</h3>
                    <div className="products__cards">
                         {
                            allProducts.filter(({id,slug}) => (slug === shopPath)).map(({id, image, name}) => (
                                <>
                                    <div className=" p-3" key={id}>
                                       <div onClick={() => handleSaveToLocalStore(id, shopPath)}>
                                        <div className="card p-2 border-0 products__description">
                                             <img src={image} className="rounded" alt="image"/>
                                                <div className="text-center">
                                            <span>{name}</span>
                                            </div>
                                        </div>
                                       </div>
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
export default ShopProducts;