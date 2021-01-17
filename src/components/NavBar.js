import React from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

import logo from '../assets/logo.png';
import './Navbar.css';

const NavBar = () => {
  return (
    <>
      <Navbar
        expand='lg'
        sticky='top'
        variant='dark'
        style={{ fontSize: '13px', color: 'black' }}
        id='navbar'
        className='px-4 mx-auto'
      >
        <Navbar.Brand href='https://www.masteroapp.com/sales-enablement-platform'>
          <img
            src={logo}
            className='d-inline-block align-top mx-4'
            alt='Master-O'
            style={{ width: '191px', height: 'auto', padding: '7px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mx-auto py-0'>
            <Nav.Link
              href='https://www.masteroapp.com/sales-enablement-platform'
              className='mx-3'
            >
              Platform
            </Nav.Link>
            <NavDropdown
              title='Solution'
              id='basic-nav-dropdown'
              className='mx-3'
            >
              <NavDropdown.Item
                href='https://www.masteroapp.com/sales-enablement/'
                className='text-black-50'
              >
                Sales Enablement
              </NavDropdown.Item>
              <NavDropdown.Item
                href='https://www.masteroapp.com/product-knowledge/'
                className='text-black-50'
              >
                Product Knowledge
              </NavDropdown.Item>
              <NavDropdown.Item
                href='https://www.masteroapp.com/customer-service/'
                className='text-black-50'
              >
                Customer Service
              </NavDropdown.Item>
              <NavDropdown.Item
                href='https://www.masteroapp.com/leadership-development/'
                className='text-black-50'
              >
                Leadership Development
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href='https://www.masteroapp.com/client-success/'
              className='mx-3'
            >
              Client Success
            </Nav.Link>
            <Nav.Link
              href='https://www.masteroapp.com/resources/'
              className='mx-3'
            >
              Resources
            </Nav.Link>
            <Nav.Link href='https://www.masteroapp.com/blog/' className='mx-3'>
              Blog
            </Nav.Link>
            <Button className='mx-3 bg-orange'>Schedule a demo</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
