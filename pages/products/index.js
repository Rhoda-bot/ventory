import { useState } from 'react';
import productData from '../utility/products.json'
import productListData from '../utility/product_list.json'
import Link  from 'next/link'
const Products = () => {

    const [products, setProducts] = useState(productData);
    const [productList, setProductList] = useState(productListData);
    const [ allProducts, setAllProducts] = useState(productList)
    const handleProductLists = (slug) => {
        console.log("I clicked on: ",  slug);
        const filt = productList.filter((val) => val.slug === slug)
        setAllProducts(filt);
        
    }
    const handleShowAllProducts = () => {
        setAllProducts(productList); 
      };
    return (
        <>
            <div className="products py-5 text-center">
                <div className="container py-5">
                    <div className="row">
                        <h1>Featured Products</h1>
                        <ul className='nav justify-content-center'>
                            <li className=' nav-item mx-3'>
                               <button onClick={ handleShowAllProducts } className='nav-link'>All</button>
                            </li>
                        {
                            products && products.map((val)=> (
                                <>
                                    <li className=' nav-item mx-3' key={val.id}>
                                        <button href="#" className='nav-link' key={val.id}  onClick={() => handleProductLists(val.slug)}>{val.name}</button>
                                    </li>
                                </>
                            ))
                        }
                        </ul>
                      <div className='row'>
                            {
                                allProducts && allProducts.map(({id,name,image})=> (
                                    <>
                                    <div className='col-md-3'>
                                        <div key={id}>
                                            <img src={image} className='img-fluid'/>
                                            <h3>{name}</h3>
                                        </div>
                                    </div>
                                    </>
                                ))
                            }
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;