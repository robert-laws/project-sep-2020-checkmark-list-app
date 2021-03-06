import React, { useState, useContext } from 'react';
import { Button, Input } from '../ui';
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

  const handleEditUpdate = async (event) => {
    event.preventDefault();

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
          <div className='flex w-full'>
            <form
              className='flex items-center w-full'
              onSubmit={handleEditUpdate}
            >
              <Input
                id='taskTitleId'
                type='text'
                placeholder='Enter a title'
                name='title'
                value={editTitle}
                onChange={handleTitleChange}
              />{' '}
              <Button type='submit' size='small'>
                Update
              </Button>
            </form>
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
              <Button
                type='button'
                size='small'
                color='gray'
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
              <Button
                title='delete task'
                type='button'
                onClick={handleDeleteClick}
                size='small'
                color='red'
                id={id}
              >
                Delete
              </Button>
            </>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
