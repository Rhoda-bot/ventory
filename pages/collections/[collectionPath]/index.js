import { useState } from "react";
import { useRouter } from "next/router";
import productData from '../../../utility/product_list.json'
import Header from "../../reusables/header";
import Link from "next/link";


const CollectionItem = () => {
    const router = useRouter();
    const path = router.query.collectionPath;
    const [allCollections, setAllCollections] = useState(productData);
   const fil = allCollections.filter((val) => val.slug === path);
   if (fil.length === 0) {
    return <p>No product found <Link href="/">Return to home</Link></p>;
    
  }
    return(
        <>
        <Header />
            <div className="container">
                <div className="row py-3">
                        <div className="products__cards">
                                {
                                fil && fil.map(({id,image})=> (
                                        <>
                                        <div className='p-3' key={id}>
                                            <Link   href={`/collections/${path}/${id}`}>
                                                <div className='card border-0 products__description'>
                                                    <div key={id}>
                                                        <img src={image} className='img-fluid'/>
                                                        <div className='card-body products__description--text'>
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
        </>
    )
}
export default CollectionItem;