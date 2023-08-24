import Image from 'next/image';
import logo from '../../public/images/logo4-removebg-preview.png'
import Link from 'next/link';

function Header() {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">hello@trybasket.com</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" href="#"> Free Shipping for all Order above ₹299</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" href="#">Pricing</Link>
                </li>
            </ul>
            <div class="navbar-text d-flex">
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

        <nav class="navbar navbar-expand-lg bg-white header">
        <div class="container">
            <Link class="navbar-brand" href="#">
                <Image src={logo} className='pb-3 header--img' alt='logoin' width={100} height={50}/>    
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText2" aria-controls="navbarText2" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText2">
            <ul class="navbar-nav header__menu me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active header__menu--link" aria-current="page" href="#">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link header__menu--link mx-3" href="#">Shop</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link header__menu--link mx-3" href="#">Basket</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link header__menu--link mx-3" href="#">Contact</Link>
                </li>
            </ul>
            <div class="navbar-text d-flex">
               <span><i className='fa fa-bag'/></span>
               <span> Total: </span>
            </div>
            </div>
        </div>
        </nav>
   
    </>
  );
}
export default Header;