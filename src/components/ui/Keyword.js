import React from 'react';

export const Keyword = ({ keyword, separator }) => {
  return (
    <span className='text-gray-600'>
      {keyword}
      {separator}
    </span>
  );
};
