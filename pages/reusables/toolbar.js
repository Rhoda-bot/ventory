const Toolbar = () => {
    return(
        <>
            <div className="toolbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 p-2">
                        <div className="dropdown w-100">
                        <button className="dropdown--btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-bars pe-1 mx-2"/>  All categories
                        </button>
                        <ul className="dropdown-menu rounded-0 w-100">
                            <li><a className="dropdown-item" href="/">All Products</a></li>
                            <li><a className="dropdown-item" href="/shop/drones">Drones</a></li>
                            <li><a className="dropdown-item" href="/shop/stems">Stems</a></li>
                            <li><a className="dropdown-item" href="/shop/drone-kits">Drone kits</a></li>
                            <li><a className="dropdown-item" href="/shop/batteries">Batteries</a></li>
                            <li><a className="dropdown-item" href="/shop/power-supply">Power supply</a></li>
                        </ul>
                        </div>
                        </div>
                        <div className="col-md-6 p-2">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-0 shadow-none" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="banner__col--btn" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Toolbar;