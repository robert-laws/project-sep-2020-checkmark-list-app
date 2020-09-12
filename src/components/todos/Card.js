import React, { useState, useContext } from 'react';
import { Heading, Input, Button } from '../ui';
import { TaskList, KeywordList } from './';
import TodosContext from '../../context/todos/todosContext';

export const Card = ({ title, todoId, userId, tasks, keywords }) => {
  const todosContext = useContext(TodosContext);
  const { updateTodo } = todosContext;

  const [editTodo, setEditTodo] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleEditToggle = () => {
    setEditTodo(true);
  };

  const handleTitleChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleEditCancel = () => {
    setEditTodo(false);
    setEditTitle(title);
  };

  const handleEditUpdate = async () => {
    const myTodo = {
      id: todoId,
      title: editTitle,
      keywords,
      userId,
    };

    await updateTodo(myTodo);

    setEditTodo(false);
    setEditTitle(editTitle);
  };

  return (
    <div className='w-96 border rounded overflow-hidden shadow-lg m-2 flex-auto'>
      <div>
        <div className='mb-2 border-b px-4 py-3'>
          {editTodo ? (
            <>
              <Input
                id={todoId}
                type='text'
                placeholder='Enter a title'
                name='title'
                value={editTitle}
                onChange={handleTitleChange}
              />{' '}
              <Button type='button' onClick={handleEditUpdate}>
                Update
              </Button>
              <Button type='button' color='red' onClick={handleEditCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Heading>{title}</Heading>{' '}
              <Button onClick={handleEditToggle} type='button'>
                Edit
              </Button>
            </>
          )}
        </div>
        <>
          {tasks && (
            <TaskList
              tasks={tasks}
              editing={true}
              todoId={todoId}
              userId={userId}
            />
          )}
          {keywords && <KeywordList keywords={keywords} />}
        </>
      </div>
    </div>
  );
};
