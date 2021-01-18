import React from 'react';

import contact from '../assets/contact.svg';
import mail from '../assets/mail.svg';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='mt-5 mb-3'>
        <div className='col'>
          <div className='footer-link-header'>Platform</div>
          <a
            href='https://www.masteroapp.com/sales-enablement-platform'
            className='footer-links'
          >
            For Front Line Sales
          </a>
          <a
            href='https://www.masteroapp.com/sales-enablement-platform'
            className='footer-links'
          >
            For Sales Trainers
          </a>
          <a
            href='https://www.masteroapp.com/sales-enablement-platform'
            className='footer-links'
          >
            For Content Creators
          </a>
          <a
            href='https://www.masteroapp.com/sales-enablement-platform'
            className='footer-links'
          >
            For Sales Managers
          </a>
          <a
            href='https://www.masteroapp.com/sales-enablement-platform'
            className='footer-links'
          >
            For Sales Leaders
          </a>
        </div>
        <div className='col'>
          <div className='footer-link-header'>Solutions</div>
          <a
            href='https://www.masteroapp.com/product-knowledge/'
            className='footer-links'
          >
            Selling Skills
          </a>
          <a
            href='https://www.masteroapp.com/product-knowledge/'
            className='footer-links'
          >
            Product Knowledge
          </a>
          <a
            href='https://www.masteroapp.com/product-knowledge/'
            className='footer-links'
          >
            Customer Service
          </a>
          <a
            href='https://www.masteroapp.com/product-knowledge/'
            className='footer-links'
          >
            Leadership Development
          </a>
        </div>
        <div className='col'>
          <div className='footer-link-header'>Resources</div>
          <a
            href='https://www.masteroapp.com/resources/'
            className='footer-links'
          >
            Webinars
          </a>
          <a
            href='https://www.masteroapp.com/resources/'
            className='footer-links'
          >
            Whitepapers
          </a>
          <a
            href='https://www.masteroapp.com/resources/'
            className='footer-links'
          >
            Featured Campaigns
          </a>
          <a
            href='https://www.masteroapp.com/resources/'
            className='footer-links'
          >
            Videos
          </a>
        </div>
        <div className='col'>
          <div className='footer-link-header'>Blog</div>
          <a href='https://www.masteroapp.com/blog/' className='footer-links'>
            How to assess workforce readiness
          </a>
          <a href='https://www.masteroapp.com/blog/' className='footer-links'>
            Six ways to accelerate new sales hires
          </a>
          <a href='https://www.masteroapp.com/blog/' className='footer-links'>
            How to close deals remotely
          </a>
        </div>
      </div>
      <div className='my-4'>
        <div className='footer-copyright' lg={6} md={12}>
          © InspireOne Technologies Pvt. Ltd. All rights reserved.
        </div>
        <div className='col'>
          <a href='tel:+911244827214' className='contact'>
            <img src={contact} alt='telephone' />
            <span>+91 124 482 7214</span>
          </a>
          <a className='contact' href='mailto:hello@masteroapp.com'>
            <img src={mail} alt='email' />
            <span>hello@masteroapp.com</span>
          </a>
        </div>
        <div className='text-center'>
          <a
            href='https://www.linkedin.com/showcase/master-o'
            style={{ height: '19px', width: '13.2px', marginLeft: '40px' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17.803'
              height='18.07'
              viewBox='0 0 17.803 18.07'
            >
              <g transform='translate(-1651.5 -6038)'>
                <path
                  d='M2.176.08A2.175,2.175,0,1,0,4.35,2.254,2.176,2.176,0,0,0,2.176.08Z'
                  transform='translate(1651.574 6037.92)'
                  fill='white'
                ></path>
                <rect
                  width='3.752'
                  height='12.071'
                  transform='translate(1651.5 6044)'
                  fill='white'
                ></rect>
                <path
                  d='M40.118,29.383a3.942,3.942,0,0,0-3.55,1.949h-.05V29.683h-3.6v12.07h3.748V35.782c0-1.574.3-3.1,2.252-3.1,1.924,0,1.949,1.8,1.949,3.2v5.87h3.749V35.133C44.618,31.883,43.917,29.383,40.118,29.383Z'
                  transform='translate(1624.685 6014.316)'
                  fill='white'
                ></path>
              </g>
            </svg>
          </a>
          <a
            href='https://www.youtube.com/watch?v=sEoOXvE0uiI'
            style={{
              width: '19px',
              height: '13.2px',
              marginLeft: '11.4px',
              marginTop: '4px',
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='25.926'
              height='18.07'
              viewBox='0 0 25.926 18.07'
            >
              <g transform='translate(-13151.201 -5568)'>
                <path
                  d='M25.478,17.583a3.276,3.276,0,0,0-2.8-2.548,87.113,87.113,0,0,0-9.708-.359,87.128,87.128,0,0,0-9.709.359,3.275,3.275,0,0,0-2.8,2.548A27.765,27.765,0,0,0,0,23.712,27.757,27.757,0,0,0,.452,29.84a3.275,3.275,0,0,0,2.8,2.548,87.051,87.051,0,0,0,9.709.359,87.035,87.035,0,0,0,9.708-.359,3.276,3.276,0,0,0,2.8-2.548,27.744,27.744,0,0,0,.454-6.128A27.761,27.761,0,0,0,25.478,17.583ZM9.617,27.736V19.162l8.242,4.3Z'
                  transform='translate(13151.201 5553.323)'
                  fill='white'
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
