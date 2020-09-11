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

  const handleClick = async (event) => {
    const taskId = event.target.id;

    await deleteTask(taskId);
  };

  return (
    <div className='mb-3 flex items-center justify-between w-full'>
      <div>
        <input
          id={id}
          checked={completed}
          onChange={handleChange}
          type='checkbox'
          className='flex-initial checked:bg-gray-900 checked:border-transparent'
        />
        <label
          htmlFor={id}
          className={`flex-initial ml-2  ${
            completed ? 'line-through text-gray-500' : 'text-black'
          }`}
        >
          {title}
        </label>
      </div>
      {editTask ? (
        <button onClick={handleClick} className='ml-2 flex-initial'>
          <Close
            title='delete task'
            id={id}
            style={{
              height: '16px',
              fill: '#F00',
            }}
          />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};
