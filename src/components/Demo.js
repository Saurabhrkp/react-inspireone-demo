import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';

import './Demo.css';

const Demo = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Col md={5} lg={5} sm={12} className='px-0'>
        <div className='form-card ml-lg-4 mt-lg-5'>
          <div className='p-4'></div>
          <h2 className='form-title'>Get ready for a personalized demo</h2>
          <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId='validationCustom01' className='py-3'>
              <Form.Control placeholder='Name (required)' required />
            </Form.Group>
            <Form.Group controlId='validationCustom02' className='py-3'>
              <Form.Control
                type='email'
                placeholder='Email (required)'
                required
              />
            </Form.Group>
            <Form.Group controlId='validationCustom03' className='py-3'>
              <Form.Control placeholder='Contact Number (required)' required />
            </Form.Group>
            <Form.Group controlId='validationCustom04' className='py-3'>
              <Form.Control placeholder='Company (required)' required />
            </Form.Group>

            <Form.Group id='formGridCheckbox'>
              <Form.Check
                type='checkbox'
                label='I agree to receive communication about Master-O.'
                className='check'
                required
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
