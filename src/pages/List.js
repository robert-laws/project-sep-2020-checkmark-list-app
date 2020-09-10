import React, { useContext, useEffect, useState } from 'react';
import spinner from '../images/spinner.gif';
import { useParams } from 'react-router-dom';
import { Page } from '../components/ui';
import { Card } from '../components/todos';

import TodosContext from '../context/todos/todosContext';

export const List = () => {
  const todosContext = useContext(TodosContext);
  const { todo, error, getTodoById } = todosContext; // getTodoById(id)

  const [isSpinning, setIsSpinning] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getTodo = async () => {
      if (id) {
        await getTodoById(id);
        setIsSpinning(false);
      }
    };

    getTodo();
  }, [id]);

  return (
    <Page>
      <div className='flex flex-col justify-start items-start w-full h-full'>
        <div className='w-full mb-3'>
          <h1 className='text-3xl border-b pb-2'>List Details</h1>
        </div>

        <div className='flex flex-wrap items-start'>
          {error && <h3>Error retrieving Todos</h3>}

          {!isSpinning && !todo && <h4>No List Found</h4>}

          <div className='flex flex-wrap items-start'>
            {isSpinning && (
              <div className='w-72'>
                <img alt='spinner' src={spinner} />
              </div>
            )}

            {!error && !isSpinning && (
              <Card
                title={todo.title}
                tasks={[{ title: 'Paint room', completed: false }]}
                keywords={todo.keywords}
              />
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};
