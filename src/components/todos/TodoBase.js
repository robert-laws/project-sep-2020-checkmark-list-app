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
        <>{children}</>
        <div className='px-4 py-3 text-center'>
          <Link to={`/list/${todoId}`}>
            <Button size='small'>Edit List</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
