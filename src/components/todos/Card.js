import React from 'react';
import { Heading } from '../ui';
import { TaskList, KeywordList } from './';

export const Card = ({ title, tasks, keywords }) => {
  return (
    <div className='w-96 border rounded overflow-hidden shadow-lg m-2 flex-auto'>
      <div>
        <div className='mb-2 border-b px-4 py-3'>
          <Heading>{title}</Heading>
        </div>
        <>
          {tasks && <TaskList tasks={tasks} />}
          {keywords && <KeywordList keywords={keywords} />}
        </>
      </div>
    </div>
  );
};
