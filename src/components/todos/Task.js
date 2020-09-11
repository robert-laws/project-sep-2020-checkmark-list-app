import React, { useContext } from 'react';
import TasksContext from '../../context/tasks/tasksContext';

export const Task = ({ id, completed = false, title, ...rest }) => {
  const tasksContext = useContext(TasksContext);
  const { updateTask } = tasksContext;

  const { todoId, userId } = rest;

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

  return (
    <div className='mb-2'>
      <input
        id={id}
        checked={completed}
        onChange={handleChange}
        type='checkbox'
        className='checked:bg-gray-900 checked:border-transparent'
      />
      <label
        htmlFor={id}
        className={`ml-2  ${
          completed ? 'line-through text-gray-500' : 'text-black'
        }`}
      >
        {title}
      </label>
    </div>
  );
};
