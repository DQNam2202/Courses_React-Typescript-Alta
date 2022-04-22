import React from 'react';
import './style.css';
const Add = () => {
  return (
    <div>
      <h2 className='heading-course'>ADD COURSE</h2>
      <form className='form-post' autoComplete='off'>
        <div className='text-field'>
          <label htmlFor='username3'>Heading</label>
          <input autoComplete='off' type='text' />
        </div>
        <div className='text-field'>
          <label htmlFor='username3'>Author</label>
          <input autoComplete='off' type='text' />
        </div>
        <div className='text-field'>
          <label htmlFor='username3'>Rating</label>
          <input autoComplete='off' type='text' />
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
            Best Seller:{' '}
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
        {/* <input
          type='text'
          name='author'
          placeholder='Enter your author'
          required
        />
        <input
          type='text'
          name='rating'
          placeholder='Rating'
          min={1}
          max={5}
          required
        />
        <input type='text' name='price' placeholder='Price' min={1} required />
        <div>
          <label htmlFor='best-seller'>Best Seller?</label>
          <input type='checkbox' name='bestSeller' id='best-seller' />
        </div>
        <input
          type='text'
          name='buyAmount'
          placeholder='Buy amount'
          defaultValue={0}
        />
        <button type='submit' className='form-submit'>
          Add course
        </button> */}
      </form>
    </div>
  );
};

export default Add;
