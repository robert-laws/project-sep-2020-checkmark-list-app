import React from 'react';
import { Heading, Button } from '../ui';
import { TaskList, Keyword } from './';

export const Card = ({ title, tasks, keywords }) => {
  return (
    <div className='w-96 border rounded overflow-hidden shadow-lg m-2 flex-auto'>
      <div>
        <div className='mb-2 border-b px-4 py-3'>
          <Heading>{title}</Heading>
          {/* <h4 className='text-gray-900 font-bold text-xl'>{title}</h4> */}
        </div>
        <>{tasks && <TaskList tasks={tasks} />}</>
        <div className='px-4 pb-3 w-full flex flex-col'>
          <p className='text-gray-500 text-base'>
            keywords:{' '}
            {keywords.map((keyword, index) => {
              if (keywords.length - 1 === index) {
                return <Keyword key={index} keyword={keyword} separator={''} />;
              } else {
                return (
                  <Keyword key={index} keyword={keyword} separator={', '} />
                );
              }
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
