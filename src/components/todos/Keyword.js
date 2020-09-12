import React from 'react';

export const Keyword = ({ keyword, separator }) => {
  return (
    <span className='text-gray-700'>
      {keyword}
      {separator}
    </span>
  );
};
