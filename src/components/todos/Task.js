import React, { useState } from 'react';
// import TasksContext from '../../context/tasks/tasksContext';

export const Task = ({ id, completed = false, title }) => {
  const [checkedBox, setCheckedBox] = useState(completed);

  const handleChange = () => {
    setCheckedBox(!checkedBox);
  };

  return (
    <div className='mb-2'>
      <input
        id={id}
        checked={checkedBox}
        onChange={handleChange}
        type='checkbox'
        className='checked:bg-gray-900 checked:border-transparent'
      />
      <label
        htmlFor={id}
        className={`ml-2  ${
          checkedBox ? 'line-through text-gray-500' : 'text-black'
        }`}
      >
        {title}
      </label>
    </div>
  );
};
