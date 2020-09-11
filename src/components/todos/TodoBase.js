import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Button } from '../ui';

export const TodoBase = ({ todoId, title, children }) => {
  return (
    <div className='w-96 border rounded overflow-hidden shadow-lg m-2 flex-auto'>
      <div>
        <div className='mb-2 border-b px-4 py-3'>
          <Heading>{title}</Heading>
        </div>

        {children}

        {/* <div className='mb-2 border-b px-4 py-3'>
          {tasks && tasks.length > 0 && <TaskList tasks={tasks} />}

          {!tasks || (tasks.length === 0 && <p>No Tasks</p>)}
        </div> */}
        {/* <div className='px-4 pb-3 w-full flex flex-col'>
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
        </div> */}
        <div className='px-4 py-3 text-center'>
          <Link to={`/list/${todoId}`}>
            <Button size='small'>Edit List</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
