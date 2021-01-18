import React, { useState } from 'react';

import LOGO_DARK from '../assets/logo-dark.svg';
import LOGO_LIGHT from '../assets/logo-light.svg';
import './Navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 76) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <nav
        className={
          navbar
            ? 'navbar navbar-expand-lg navbar-light bg-light sticky-top py-3'
            : 'navbar navbar-expand-lg navbar-dark sticky-top py-3'
        }
      >
        <div className='container'>
          <a className='navbar-brand' href='/'>
            <img
              src={navbar ? LOGO_DARK : LOGO_LIGHT}
              className='d-inline-block align-top mx-4'
              alt='Master-O'
              width='191px'
              height='auto'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav mx-auto justify-content-center align-items-center'>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  aria-current='page'
                  href='https://www.masteroapp.com/'
                >
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://www.masteroapp.com/sales-enablement-platform'
                >
                  Platform
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://www.masteroapp.com/client-success/'
                >
                  Client Success
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://www.masteroapp.com/resources/'
                >
                  Resources
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='https://www.masteroapp.com/blog/'>
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <button className='btn btn-lg btn-orange'>
                  Schedule a demo
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
