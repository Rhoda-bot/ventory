import { useRouter } from "next/router";
import Header from "../reusables/header";
import { useEffect, useState } from "react";
import productData from '../../utility/product_list.json'
import Link from "next/link";
import Footer from "../reusables/footer";

const ShopItems = () => {
    const router = useRouter();
    const [store, setStore] = useState();

    useEffect(() => {
       setStore(JSON.parse(localStorage.getItem('storeDetails')))
    }, []);
    const filteredProducts = productData.filter(({ slug }) => slug === store?.slug); ///
    return(
        <>
            <Header />
            
            <div className="">
                <div className="container">
                    <div className="row">
                        {productData?.length === 0 ? (
                            <p>No products found</p>
                        ) :
                        productData && productData.filter((val) => (val.id == store?.id)).map(({id, image, name}) => (
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
                   <div className="row">
                         <h1 className="mt-4 text-center">Other Similar Products</h1>
                   <div className="products__cards mt-4  py-3">
    
                         {
                            filteredProducts?.length === 0 ? (
                                <p>No products found.</p>
                            ) : (
                               <>
                                    {filteredProducts?.map(({ id, image, name }) => (
                                        <div className=" p-3" key={id}>
                                            <Link href={`/shop/${store?.slug}/${id}`}>
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
            </div>
            <Footer />
        </>
    )
}
export default ShopItems;