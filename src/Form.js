import React, { useState } from 'react';
import './Form.css';
const Form = () => {
  return (
    <div className='container'>
      <div className='text'>Contact us Form</div>
      <form>
        <div className='form-row'>
          <div className='input-data'>
            <input type='text' required='' name='firstName' />
            <div className='underline' />
            <label htmlFor=''>First Name</label>
          </div>
          <div className='input-data'>
            <input type='text' required='' name='lastName' />
            <div className='underline' />
            <label htmlFor=''>Last Name</label>
          </div>
        </div>
        <div className='form-row'>
          <div className='input-data'>
            <input type='text' required='' name='email' />
            <div className='underline' />
            <label htmlFor=''>Email Address</label>
          </div>
        </div>
        <div className='form-row'>
          <div className='input-data textarea'>
            <div className='form-row submit-btn'>
              <div className='input-data'>
                <div className='inner' />
                <button type='submit'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
