import React, { useContext } from 'react';
import { ReactComponent as Close } from '../../images/close.svg';
import TasksContext from '../../context/tasks/tasksContext';

export const Task = ({ id, completed = false, title, ...rest }) => {
  const tasksContext = useContext(TasksContext);
  const { updateTask, deleteTask } = tasksContext;

  const { todoId, userId, editTask } = rest;

  const handleChange = () => {
    const task = {
      id,
      completed: !completed,
      title,
      todoId,
      userId,
    };

    updateTask(task);
  };

  const handleClick = (event) => {
    const taskId = event.target.id;

    deleteTask(taskId);
  };

  return (
    <div className='mb-3 flex items-center w-full'>
      <input
        className='flex-initial'
        id={id}
        checked={completed}
        onChange={handleChange}
        type='checkbox'
        className='checked:bg-gray-900 checked:border-transparent'
      />
      <label
        className='flex-initial'
        htmlFor={id}
        className={`ml-2  ${
          completed ? 'line-through text-gray-500' : 'text-black'
        }`}
      >
        {title}
      </label>
      {editTask ? (
        <button onClick={handleClick} className='ml-2 flex-1'>
          <Close
            title='delete task'
            id={id}
            style={{
              height: '16px',
              fontWeight: 'bold',
              fill: '#F00',
              float: 'right',
            }}
          />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};
