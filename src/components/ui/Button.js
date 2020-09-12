import React from 'react';

export const Button = ({
  size = 'normal',
  color = 'blue',
  type = 'submit',
  children,
  ...rest
}) => {
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
      type={type}
      className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold mx-1 ${getSizing(
        size
      )} rounded`}
      {...rest}
    >
      {children}
    </button>
  );
};
