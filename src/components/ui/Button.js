import React from 'react';

export const Button = ({ size = 'normal', children }) => {
  const getSizing = (size) => {
    switch (size) {
      case 'normal':
        return 'text-base py-2 px-4';

      case 'small':
        return 'text-sm py-1 px-2';

      case 'big':
        return 'text-lg py-3 px-6';

      default:
        return 'py-2 px-4';
    }
  };

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ${getSizing(
        size
      )} rounded`}
    >
      {children}
    </button>
  );
};
