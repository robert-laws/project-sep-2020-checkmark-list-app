import React, { useContext, useState, useEffect } from 'react';
import spinner from '../images/spinner.gif';
import { Page, PageHeading, Input } from '../components/ui';
import { TodoBase, TaskList, KeywordList } from '../components/todos';
import AuthContext from '../context/auth/authContext';
import TodosContext from '../context/todos/todosContext';
import TasksContext from '../context/tasks/tasksContext';

export const Lists = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const todosContext = useContext(TodosContext);
  const { todos, todosError, getTodosByUserId, createTodo } = todosContext;

  const tasksContext = useContext(TasksContext);
  const { tasks, tasksError, getTasksByUserId } = tasksContext;

  const [isSpinning, setIsSpinning] = useState(true);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      if (user) {
        await getTodosByUserId(user);
        setIsSpinning(false);
      }
    };

    getTodos();
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    const getTasks = async () => {
      if (user) {
        await getTasksByUserId(user);
      }
    };

    getTasks();
    // eslint-disable-next-line
  }, [user]);

  const divideTasks = (todoId) => {
    if (tasks) {
      const todoTasks = tasks.filter((task) => task.todoId === todoId);
      return todoTasks;
    }
  };

  const handleKeyDown = async (event) => {
    if (event.keyCode === 13) {
      if (event.target.value !== '') {
        const myTodo = {
          title: event.target.value,
          userId: user,
          keywords: [],
          createdAt: Date.now(),
        };

        await createTodo(myTodo);

        setError('');
        setTitle('');
      } else {
        setError('Please enter a todo');
      }
    }
  };

  if (todosError) return <h3>Error retrieving Todos</h3>;

  return (
    <Page>
      <div className='flex flex-col justify-start items-start w-full h-full'>
        <div className='w-full mb-3'>
          <PageHeading title='Your Checkmark Lists' />
        </div>

        {!isSpinning && todos.length === 0 && <h4>No Lists Found</h4>}

        <div className='flex w-full py-1 mb-3 bg-blue-200'>
          {!isSpinning && (
            <div className='w-full border rounded overflow-hidden shadow-lg m-2 pt-3 pb-1 px-3 flex-auto bg-white'>
              <Input
                error={error}
                id='title'
                name='title'
                type='text'
                placeholder='Add a New Todo List'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          )}
        </div>

        <div className='flex flex-wrap items-start md:px-10 px-1'>
          {isSpinning && (
            <div className='w-72'>
              <img alt='spinner' src={spinner} />
            </div>
          )}

          {!tasksError &&
            !isSpinning &&
            todos.map((todo) => (
              <TodoBase key={todo.id} todoId={todo.id} title={todo.title}>
                <TaskList tasks={divideTasks(todo.id)} />
                <KeywordList keywords={todo.keywords} />
              </TodoBase>
            ))}
        </div>
      </div>
    </Page>
  );
};
