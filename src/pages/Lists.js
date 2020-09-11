import React, { useContext, useState, useEffect } from 'react';
import spinner from '../images/spinner.gif';
import { Page } from '../components/ui';
import { TodoBase, TaskList, KeywordList } from '../components/todos';
import AuthContext from '../context/auth/authContext';
import TodosContext from '../context/todos/todosContext';
import TasksContext from '../context/tasks/tasksContext';

export const Lists = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const todosContext = useContext(TodosContext);
  const { todos, error, getTodosByUserId } = todosContext;

  const tasksContext = useContext(TasksContext);
  const { tasks, tasksError, getTasksByUserId } = tasksContext;

  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    const getTodos = async () => {
      if (user) {
        await getTodosByUserId(user);
        setIsSpinning(false);
      }
    };

    getTodos();
  }, [user]);

  useEffect(() => {
    const getTasks = async () => {
      if (user) {
        await getTasksByUserId(user);
      }
    };

    getTasks();
  }, [user]);

  const divideTasks = (todoId) => {
    if (tasks) {
      const todoTasks = tasks.filter((task) => task.todoId === todoId);
      return todoTasks;
    }
  };

  return (
    <Page>
      <div className='flex flex-col justify-start items-start w-full h-full'>
        <div className='w-full mb-3'>
          <h1 className='text-3xl border-b pb-2'>Your Checkmark Lists</h1>
        </div>

        {error && <h3>Error retrieving Todos</h3>}

        {!isSpinning && todos.length === 0 && <h4>No Lists Found</h4>}

        <div className='flex flex-wrap items-start'>
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
