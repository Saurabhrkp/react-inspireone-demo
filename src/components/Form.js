import React, { useState } from 'react';

import './Form.css';

const Form = () => {
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
      <div className='px-0'>
        <div className='form-card ml-lg-4 mt-lg-5'>
          <div className='p-4'></div>
          <h2 className='form-title'>
            Find out how you can remotely engage, enable & enhance your
            salesforce by gamifying your existing marketing & training content
          </h2>
          <form validated={validated} onSubmit={handleSubmit}>
            <div controlId='validationCustom01' className='py-3'>
              <div placeholder='Name (required)' required />
            </div>
            <div controlId='validationCustom02' className='py-3'>
              <div type='email' placeholder='Email (required)' required />
            </div>
            <div controlId='validationCustom04' className='py-3'>
              <div placeholder='Company (required)' required />
            </div>
            <button className='bg-orange px-5 py-3' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
