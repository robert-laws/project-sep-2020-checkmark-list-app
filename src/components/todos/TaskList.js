import React, { useState, useEffect, useContext } from 'react';
import spinner from '../../images/spinner.gif';
import { Input } from '../ui/';
import { Task } from './';
import TasksContext from '../../context/tasks/tasksContext';

export const TaskList = ({ todoId, userId, editing = false, tasks }) => {
  const tasksContext = useContext(TasksContext);
  const { createTask } = tasksContext;

  const [isSpinning, setIsSpinning] = useState(true);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (tasks) {
      setIsSpinning(false);
    }
  }, [tasks]);

  const handleKeyDown = async (event) => {
    if (event.keyCode === 13) {
      if (event.target.value !== '') {
        const myTask = {
          completed: false,
          title: event.target.value,
          userId,
          todoId,
        };

        await createTask(myTask);

        setError('');
        setTitle('');
      } else {
        setError('Please enter a task');
      }
    }
  };

  return (
    <div className='mb-2 border-b px-4 py-3'>
      {isSpinning && (
        <div className='w-40'>
          <img alt='spinner' src={spinner} />
        </div>
      )}

      {tasks && tasks.length === 0 && <h4>No Tasks</h4>}

      {!isSpinning &&
        tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            {...task}
            editTask={editing}
          />
        ))}

      {editing ? (
        <div className='mt-5 mb-1'>
          <Input
            error={error}
            id='title'
            name='title'
            type='text'
            placeholder='New Task Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
