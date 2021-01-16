import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';

const Demo = () => {
  return (
    <>
      <Col md={5} lg={5} sm={12} className='px-0'>
        <div className='form-card ml-lg-4 mt-lg-5'>
          <div className='p-4'></div>
          <h2 className='form-title'>Get ready for a personalized demo</h2>
          <Form>
            <Form.Group controlId='formGridAddress1' className='py-3'>
              <Form.Control placeholder='Name (required)' />
            </Form.Group>
            <Form.Group controlId='formGridAddress1' className='py-3'>
              <Form.Control placeholder='Email (required)' />
            </Form.Group>
            <Form.Group controlId='formGridAddress1' className='py-3'>
              <Form.Control placeholder='Contact Number (required)' />
            </Form.Group>
            <Form.Group controlId='formGridAddress2' className='py-3'>
              <Form.Control placeholder='Company (required)' />
            </Form.Group>

            <Form.Group id='formGridCheckbox'>
              <Form.Check
                type='checkbox'
                label='I agree to receive communication about Master-O.'
                className='check'
              />
            </Form.Group>

            <Button className='bg-orange px-5 py-3' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default Demo;
