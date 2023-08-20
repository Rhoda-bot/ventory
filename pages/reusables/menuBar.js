// Navbar.js

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo4-removebg-preview.png'


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
   <>
   <div className='navigation mt-5'>
   <nav className=" navbar navbars  navbar-expand-md fixed-top p-0 m-0">
      <div className="container">
        <button
          className=" navbars--toggle"
          type="button"
          onClick={toggleSidebar}
        >
             {typeof window !== 'undefined' && window.innerWidth < 768 ? (
            showSidebar ? (
              <i className='fa fa-close' />
            ) : (
              <i className='fa fa-bars' />
            )
          ) : null}
        </button>
        <Link href="/" className="navbar-brand navbars__brand">
          <Image src={logo} className='img-fluid px-3 pb-2' alt='logoin' width={150} height={20}/>
        </Link>

        <ul className={`navbar-nav navbars__nav ml-auto ${showSidebar ? 'navbars__show' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link fw-25 px-3 navbars--link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link fw-25 px-3 navbars--link">
              SHOP
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link fw-25 px-3 navbars--link">
              BASKET
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link fw-25 px-3 navbars--link">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/authentication/login" as="/login" className="nav-link fw-25 px-3 navbars--link">
            LOGIN

            </Link>
          </li>
          <li className="nav-item">
            <Link href="/authentication/register" as="/register" className="nav-link fw-25 px-3 navbars--link">
              REGISTER
            </Link>
          </li>
        </ul>
       
      </div>
    </nav>
   </div>
   </>
  );
};

export default Navbar;
