import React, { useState, useContext } from 'react';
import { Button, Input } from '../ui';
import { ReactComponent as Close } from '../../images/close.svg';
import TasksContext from '../../context/tasks/tasksContext';

export const Task = ({ id, completed = false, title, ...rest }) => {
  const tasksContext = useContext(TasksContext);
  const { updateTask, deleteTask } = tasksContext;

  const { todoId, userId, editTask } = rest;

  const [editTitleTask, setEditTitleTask] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleEditToggle = () => {
    setEditTitleTask(true);
  };

  const handleTitleChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleEditCancel = () => {
    setEditTitleTask(false);
    setEditTitle(title);
  };

  const handleCheckboxChange = () => {
    const task = {
      id,
      completed: !completed,
      title,
      todoId,
      userId,
    };

    updateTask(task);
  };

  const handleEditUpdate = async () => {
    const task = {
      id,
      completed,
      title: editTitle,
      todoId,
      userId,
    };

    await updateTask(task);

    setEditTitleTask(false);
    setEditTitle(editTitle);
  };

  const handleDeleteClick = async (event) => {
    const taskId = event.target.id;

    await deleteTask(taskId);
  };

  return (
    <div className='mb-3 flex items-center justify-between w-full'>
      <div className='flex flex-1 items-center'>
        <input
          id={id}
          checked={completed}
          onChange={handleCheckboxChange}
          type='checkbox'
          className='flex-initial checked:bg-gray-900 checked:border-transparent mr-2'
          disabled={editTitleTask}
        />
        {editTitleTask ? (
          <div className='flex flex-1 w-full'>
            <Input
              id='taskTitleId'
              type='text'
              placeholder='Enter a title'
              name='title'
              value={editTitle}
              onChange={handleTitleChange}
            />{' '}
          </div>
        ) : (
          <label
            htmlFor={id}
            className={`flex-initial ml-2  ${
              completed ? 'line-through text-gray-500' : 'text-black'
            }`}
          >
            {title}
          </label>
        )}
      </div>
      {editTask ? (
        <div>
          {editTitleTask ? (
            <>
              <Button type='button' size='small' onClick={handleEditUpdate}>
                Update
              </Button>
              <Button
                type='button'
                size='small'
                color='red'
                onClick={handleEditCancel}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button size='small' type='button' onClick={handleEditToggle}>
                Edit
              </Button>
            </>
          )}
          <button onClick={handleDeleteClick} className='ml-2 flex-initial'>
            <Close
              title='delete task'
              id={id}
              style={{
                height: '16px',
                fill: '#F00',
              }}
            />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
