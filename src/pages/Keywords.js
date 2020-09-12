import React, { useContext, useState, useEffect } from 'react';
import spinner from '../images/spinner.gif';
import { Page, PageHeading, Input, Button } from '../components/ui';
import { TodoBase, KeywordList } from '../components/todos/';
import AuthContext from '../context/auth/authContext';
import TodosContext from '../context/todos/todosContext';

export const Keywords = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const todosContext = useContext(TodosContext);
  const { todos, getTodosByUserId } = todosContext;

  const [error, setError] = useState('');
  const [isSpinning, setIsSpinning] = useState(true);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      if (user) {
        await getTodosByUserId(user);
        setIsSpinning(false);
      }
    };

    getTodos();
  }, [user]);

  const handleSearch = (event) => {
    event.preventDefault();

    if (search === '') {
      setError('enter a keyword search');
    } else {
      const todosSearch = todos.filter((todo) =>
        todo.keywords.includes(search.toLowerCase())
      );
      setFilteredTodos(todosSearch);

      setShow(true);
      setIsSpinning(false);
      setError('');
    }
  };

  return (
    <Page>
      <PageHeading title='Keywords' />
      <div>
        <div className='h-20'>
          <form
            onSubmit={handleSearch}
            className='flex items-start justify-start w-full'
          >
            <div className='w-96'>
              <Input
                error={error}
                id='title'
                name='title'
                type='text'
                placeholder='Keyword Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <Button type='submit'>Search</Button>
            </div>
          </form>
        </div>
        <div className='flex flex-wrap items-start md:px-10 px-1'>
          {show && isSpinning && (
            <div className='w-72'>
              <img alt='spinner' src={spinner} />
            </div>
          )}

          {show && filteredTodos.length === 0 ? (
            <h4>No keyword matches</h4>
          ) : (
            ''
          )}

          {show &&
            !isSpinning &&
            filteredTodos.map((todo) => (
              <TodoBase key={todo.id} todoId={todo.id} title={todo.title}>
                <KeywordList keywords={todo.keywords} />
              </TodoBase>
            ))}
        </div>
      </div>
    </Page>
  );
};
