import React, { useState, useEffect, useContext } from 'react';
import spinner from '../../images/spinner.gif';
import { Input } from '../ui/';
import { Keyword } from './';
import TodosContext from '../../context/todos/todosContext';

export const KeywordList = ({
  keywords,
  todoId,
  userId,
  todoTitle,
  editing = false,
}) => {
  const todosContext = useContext(TodosContext);
  const { updateTodo } = todosContext;

  const [isSpinning, setIsSpinning] = useState(true);
  const [error, setError] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (keywords) {
      setIsSpinning(false);
    }
  }, [keywords]);

  const handleKeyDown = async (event) => {
    if (event.keyCode === 13) {
      if (event.target.value !== '') {
        const myTodo = {
          id: todoId,
          title: todoTitle,
          keywords: [...keywords, keyword],
          userId,
        };

        await updateTodo(myTodo);

        setError('');
        setKeyword('');
      } else {
        setError('Please enter a task');
      }
    }
  };

  return (
    <div className='pb-3 w-full flex flex-col'>
      {isSpinning && (
        <div className='w-20'>
          <img alt='spinner' src={spinner} />
        </div>
      )}

      {keywords && keywords.length === 0 && (
        <h4 className='p-4'>No Keywords</h4>
      )}

      {keywords && keywords.length > 0 && (
        <p className='text-black text-base p-4'>
          keywords:{' '}
          {keywords.map((keyword, index) => {
            if (keywords.length - 1 === index) {
              return (
                <span
                  key={keyword}
                  className={`${
                    editing ? 'flex items-center' : 'inline-block'
                  }`}
                >
                  <Keyword
                    id={todoId}
                    title={todoTitle}
                    keyword={keyword}
                    keywords={keywords}
                    userId={userId}
                    separator={''}
                    editing={editing}
                  />
                </span>
              );
            } else {
              return (
                <span
                  key={keyword}
                  className={`${
                    editing ? 'flex items-center' : 'inline-block'
                  }`}
                >
                  <Keyword
                    id={todoId}
                    title={todoTitle}
                    keyword={keyword}
                    keywords={keywords}
                    userId={userId}
                    separator={`${editing ? '' : ','}`}
                    editing={editing}
                  />
                </span>
              );
            }
          })}
        </p>
      )}

      {editing ? (
        <div className='px-4 mt-1 pb-5 border-b'>
          <Input
            error={error}
            id='keyword'
            name='keyword'
            type='text'
            placeholder='New Keyword'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
