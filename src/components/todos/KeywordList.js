import React, { useState, useEffect } from 'react';
import spinner from '../../images/spinner.gif';
import { Keyword } from './';

export const KeywordList = ({ keywords }) => {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    if (keywords) {
      setIsSpinning(false);
    }
  }, [keywords]);

  return (
    <div className='px-4 pb-3 w-full flex flex-col'>
      {isSpinning && (
        <div className='w-20'>
          <img alt='spinner' src={spinner} />
        </div>
      )}

      {keywords && keywords.length === 0 && <p>No Keywords</p>}

      {keywords && keywords.length > 0 && (
        <p className='text-gray-500 text-base'>
          keywords:{' '}
          {keywords.map((keyword, index) => {
            if (keywords.length - 1 === index) {
              return <Keyword key={index} keyword={keyword} separator={''} />;
            } else {
              return <Keyword key={index} keyword={keyword} separator={', '} />;
            }
          })}
        </p>
      )}
    </div>
  );
};
