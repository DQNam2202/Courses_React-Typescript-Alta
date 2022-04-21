import React from 'react';

const Add = () => {
  return (
    <div>
      <form className='form-post' autoComplete='off'>
        <input type='text' name='image' placeholder='Image url' required />
        <input
          type='text'
          name='title'
          placeholder='Enter your title'
          required
        />
        <input
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
        </button>
      </form>
    </div>
  );
};

export default Add;
