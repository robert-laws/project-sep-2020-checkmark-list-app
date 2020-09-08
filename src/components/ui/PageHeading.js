import React from 'react';

export const PageHeading = ({ title }) => {
  return (
    <div className='w-full mb-3'>
      <h1 className='text-3xl border-b pb-2'>{title}</h1>
    </div>
  );
};
