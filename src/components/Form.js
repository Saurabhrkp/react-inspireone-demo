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
      <div className='col-lg-5 col-md-6 col-12 mt-lg-5'>
        <div className='form-card p-5 rounded shadow-lg'>
          <div className='p-4'></div>
          <h2 className='form-title'>
            Find out how you can remotely engage, enable & enhance your
            salesforce by gamifying your existing marketing & training content
          </h2>
          <form className='needs-validation' noValidate onSubmit={handleSubmit}>
            <div id='validationCustom01' className='py-4'>
              <input
                className='form-control'
                placeholder='Name (required)'
                required
              />
            </div>
            <div id='validationCustom02' className='py-4'>
              <input
                className='form-control'
                type='email'
                placeholder='Email (required)'
                required
              />
            </div>
            <div id='validationCustom04' className='py-4'>
              <input
                className='form-control'
                placeholder='Company (required)'
                required
              />
            </div>
            <button
              className='btn btn-lg btn-orange px-5 py-4 mt-3'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
