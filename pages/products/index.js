import { useState } from 'react';
import productData from '../utility/products.json'
import Link  from 'next/link'
const Products = () => {

    const [products, setProducts] = useState(productData);
    const handleProductLists = (slug) => {
        console.log(slug);
    }
    return (
        <>
            <div className="products py-5">
                <div className="container py-5">
                    <div className="row">
                        <ul className='nav justify-content-center'>
                        {
                            products && products.map((val)=> (
                                <>
                                    <li className=' nav-item mx-3 ' key={val.id}>
                                        <Link href="#" className='nav-link' onClick={handleProductLists(val.slug)}>{val.name}</Link>
                                    </li>
                                </>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Products;