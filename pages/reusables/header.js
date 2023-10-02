import Image from 'next/image';
import logo from '../../public/images/logo4-removebg-preview.png'
import Link from 'next/link';
import Toolbar from './toolbar';

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">hello@trybasket.com</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="#"> Free Shipping for all Order above ₹299</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" href="#">Pricing</Link>
                </li>
            </ul>
            <div className="navbar-text d-flex">
                <span className='mx-2 px-1'><i className='fa fa-facebook'/></span>
                <span className='mx-2 px-1'><i className='fa fa-twitter'/></span>
                <span className='mx-2 px-1'><i className='fa fa-linkedin'/></span>
                <span className='mx-2 px-1'><i className='fa fa-pinterest'/></span>
                <div className='mx-3 px-2'><i className='fa fa-user'/> Login</div>
                <div className=''><i className='fa fa-user-plus'/> Register</div>
            </div>
            </div>
        </div>
        </nav>

        <nav className="navbar navbar-expand-lg bg-white header">
        <div className="container">
            <Link className="navbar-brand" href="#">
                <Image src={logo} className='pb-3 header--img' alt='logoin' width={100} height={50}/>    
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText2" aria-controls="navbarText2" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText2">
            <ul className="navbar-nav header__menu me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active header__menu--link" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link header__menu--link mx-3" href="/collections">Catalog</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link header__menu--link mx-3" href="#">Basket</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link header__menu--link mx-3" href="#">Contact</Link>
                </li>
            </ul>
            <div className="navbar-text d-flex">
               <span><i className='fa fa-bag'/></span>
               <span> Total: </span>
            </div>
            </div>
        </div>
        </nav>
    <Toolbar />
    </>
  );
}
export default Header;