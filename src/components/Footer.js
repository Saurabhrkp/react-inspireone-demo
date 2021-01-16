import React from 'react';
import { Row, Col } from 'react-bootstrap';

import contact from '../assets/contact.svg';

const Footer = () => {
  return (
    <>
      <Row className='mt-5 mb-3'>
        <Col lg={3} md={12}>
          <div className='footer-link-header'>Platform</div>
          <a className='footer-links'>For Front Line Sales</a>
          <a className='footer-links'>For Sales Trainers</a>
          <a className='footer-links'>For Content Creators</a>
          <a className='footer-links'>For Sales Managers</a>
          <a className='footer-links'>For Sales Leaders</a>
        </Col>
        <Col lg={3} md={12}>
          <div className='footer-link-header'>Solutions</div>
          <a className='footer-links'>Selling Skills</a>
          <a className='footer-links'>Product Knowledge</a>
          <a className='footer-links'>Customer Service</a>
          <a className='footer-links'>Leadership Development</a>
        </Col>
        <Col lg={3} md={12}>
          <div className='footer-link-header'>Resources</div>
          <a className='footer-links'>Webinars</a>
          <a className='footer-links'>Whitepapers</a>
          <a className='footer-links'>Featured Campaigns</a>
          <a className='footer-links'>Videos</a>
        </Col>
        <Col lg={3} md={12}>
          <div className='footer-link-header'>Blog</div>
          <a className='footer-links'>How to assess workforce readiness</a>
          <a className='footer-links'>Six ways to accelerate new sales hires</a>
          <a className='footer-links'>How to close deals remotely</a>
        </Col>
      </Row>
      <Row>
        <Col className='footer-copyright'>
          © InspireOne Technologies Pvt. Ltd. All rights reserved.
        </Col>
        <Col>
          <a>
            <img src={contact} />
            <span className='pl-3'>+91 124 482 7214</span>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
