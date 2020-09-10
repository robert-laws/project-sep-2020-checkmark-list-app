import React from 'react';

export const Task = ({ completed = false, title }) => {
  return (
    <div className='mb-2'>
      <input
        id='myCheck0'
        checked={completed}
        type='checkbox'
        className='checked:bg-gray-900 checked:border-transparent'
      />
      <label htmlFor='myCheck0' className='ml-2 text-black'>
        {title}
      </label>
    </div>
  );
};
