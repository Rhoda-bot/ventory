import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../reusables/header";
import productData from '../../../utility/product_list.json'
import Link from "next/link";

const CollectionItem = () => {
    const router = useRouter();
    const { id, collectionPath } = router.query;
    const [allCollections] = useState(productData);
    useEffect(() => {
        if (id && collectionPath) {
          // Filter products based on id and collectionPath
      const filteredProduct = allCollections.find((val) => val.id === +id && val.slug === collectionPath);

      // Filter similar products in the same collection but exclude the current product
      const similarProducts = allCollections.filter((val) => val.slug === collectionPath && val.id !== filteredProduct.id);
      
      setFilteredProducts(filteredProduct);
      setSimilarProducts(similarProducts);
        }
    
      }, [id, collectionPath, allCollections]);
    const handleItem = (pathId) => {
        router.push(`/collections/${collectionPath}/${pathId}`);
    }
    
  const [filteredProducts, setFilteredProducts] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);

  if (!filteredProducts || Object.keys(filteredProducts).length === 0) {
    return <p>No product found</p>;
  }
    return(
        <>
        <Header/>
            <div className="container">
            <div className="row align-items-center">
            
                    <div className="col-md-6 border-end">
                        <div className="card border-0">
                        <img src={filteredProducts.image} className="img-fluid rounded" alt={`Product: ${filteredProducts.name}`} />
                        </div>
                    </div>
                    <div className="col-md-2" />
                    <div className="col-md-4">
                        <h3 className="display-6 mb-4">Description: {filteredProducts.name}</h3>
                        <div className="mb-2">₦ {filteredProducts.price}.00 NGN</div>
                        <small style={{ color: 'gray' }}>Tax included. Shipping calculated at checkout.</small>
                    </div>
            </div>
                <div className="row">
                <h1 className="mt-4 text-center">Other Similar Products</h1>
                <div className="products__cards mt-4  py-3">
                    {similarProducts.map(({ id, image, price }) => (
                    <div className="p-3" key={id}>
                        <div className="card p-2 border-0 products__description" onClick={() => handleItem(id)}>
                        <img src={image} className="rounded" alt={`Product: ${name}`} />
                        <div className="">
                            <span>Price:  <b>₦{price}</b></span>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    )
}
export default CollectionItem;