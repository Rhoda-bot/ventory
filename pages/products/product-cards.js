const ProductCard = () => {
    return(
        <>
            <div className="products__row  ">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 products__col">
                        <div className="card rounded-0 p-3  alert alert-primary">
                        <div className="row py-5 align-items-flex">
                            <div className="col-6 products__col--image" />
                                <div className="col-6">
                                <h3 className="products__col--title">Special Drone</h3>
                                <p className="products__col--text">100% proeffecient for you!</p>
                                <button className="products__col--btn">Shop Now</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 products__col ">
                       <div className="card border-0 rounded-0 p-3  alert alert-warning">
                       <div className="row py-5 align-items-flex">
                            <div className="col-6 products__col--image2 text-end" />
                                <div className="col-6">
                                <h3 className="products__col--title">Original Battery</h3>
                                <p className="products__col--text">100% proeffecient for you!</p>
                                <button className="products__col--btn">Shop Now</button>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard;