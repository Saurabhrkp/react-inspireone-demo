import React from 'react';
import { Row, Col } from 'react-bootstrap';

import phone from '../assets/1-Phone.png';
import client from '../assets/client.png';

import './Sales.css';

const Sales = () => {
  return (
    <>
      <Col md={7} lg={7} sm={12} className='mb-5 pl-0'>
        <h1 className='title'>SALES ENABLEMENT DEMO</h1>
        <p className='subtitle'>
          Experience a new age microlearning & sales training platform in action
        </p>
        <Row>
          <Col sm={12} md={5} lg={5} className='text-center'>
            <img src={phone} className='img-fluid' />
          </Col>
          <Col sm={12} md={7} lg={7}>
            <h5 className='list-title'>
              Learn first hand how your salesforce can improve capabilities and
              accelerate results:
            </h5>
            <ul>
              <li>Onboard new sales hires faster & better</li>
              <li>Enable sales reps to better engage with customers</li>
              <li>
                Enhance competencies more effectively using microlearning &
                game-based assessments
              </li>
              <li>Rapidly author new sales training content</li>
              <li>
                Update your field force teams in real-time with product updates
              </li>
              <li>
                Improve sales coaching & training capabilities of your team
              </li>
            </ul>
          </Col>
        </Row>
        <h2 className='companies'>
          Leading organizations use Master-O to improve workforce productivity
        </h2>
        <img src={client} className='img-fluid' />
      </Col>
    </>
  );
};

export default Sales;
