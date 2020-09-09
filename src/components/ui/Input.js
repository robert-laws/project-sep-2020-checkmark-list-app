import React from 'react';

export const Input = ({ id, name, type, placeholder, error, ...rest }) => {
  return (
    <>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline'
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        {...rest}
      />
      <p className='text-red-500 mt-2 text-sm italic'>{error}</p>
    </>
  );
};
