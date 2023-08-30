import { useState } from 'react';
import productData from '../utility/products.json'
import productListData from '../utility/section_data.json'
import Link  from 'next/link'
import Footer from '../reusables/footer';
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
                <div className="container">
                    <div className="row">
                        <h1 className='products--title'>Featured Products</h1>
                        <ul className='nav justify-content-center products__menu'>
                            <li className=' nav-item mx-3'>
                               <button onClick={ handleShowAllProducts } className='nav-link products__menu--link'>All</button>
                            </li>
                        {
                            products && products.map((val)=> (
                                <>
                                    <li className=' nav-item mx-3' key={val.id}>
                                        <button href="#" className='nav-link products__menu--link' key={val.id}  onClick={() => handleProductLists(val.slug)}>{val.name}</button>
                                    </li>
                                </>
                            ))
                        }
                        </ul>
                      <div className='row'>
                            {
                                allProducts && allProducts.map(({id,title,imageUrl,linkUrl})=> (
                                    <>
                                    <div className=' col-md-3 col-lg-4 p-3' key={id}>
                                        <Link href={linkUrl}>
                                            <div className='card border-0 products__description'>
                                                <div key={id}>
                                                    <img src={imageUrl} className='img-fluid' alt='image'/>
                                                    <div className='card-body products__description--text'>
                            
                                                        <h3>{title}</h3>
                                                        <p>lorem</p>
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
export default Products;