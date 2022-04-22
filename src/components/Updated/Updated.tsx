import React from 'react';
import './style.css';
const Updated = () => {
  return (
    <div>
      <h2 className='heading-course'>UPDATED COURSE</h2>
      <form className='form-post' autoComplete='off'>
        <div className='text-field'>
          <label htmlFor='username3'>Heading</label>
          <input autoComplete='off' type='text' />
        </div>
        <div className='text-field'>
          <label htmlFor='username3'>Author</label>
          <input autoComplete='off' type='text' placeholder='@Manchile' />
        </div>
        <div className='text-field'>
          <label htmlFor='username3'>Rating</label>
          <input autoComplete='off' type='text' placeholder='' />
        </div>
        <div className='text-field'>
          <label htmlFor='username3'>Amount</label>
          <input autoComplete='off' type='text' />
        </div>
        <div className='text-field'>
          <label htmlFor='username3'>Price</label>
          <input autoComplete='off' type='text' />
        </div>
        <div className='input-check'>
          <label htmlFor='best-seller' className='name-seller'>
            Best Seller:
          </label>
          <input type='checkbox' name='bestSeller' id='best-seller' />
        </div>
        <div className=''>
          <div className='content'>
            <div className='imgBox'>
              <img src='https://source.unsplash.com/random' alt='name' />
            </div>
            <button className='randomImage'>Random image</button>
          </div>
        </div>
        <div className='inputSubmit'>
          <button type='submit' className='btnSubmit'>
            Add course
          </button>
        </div>
      </form>
    </div>
  );
};

export default Updated;
