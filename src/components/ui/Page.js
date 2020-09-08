import React from 'react';

export const Page = ({ children }) => {
  return (
    <div className='flex flex-col justify-start items-start w-full h-full py-4 px-8'>
      {children}
    </div>
  );
};
