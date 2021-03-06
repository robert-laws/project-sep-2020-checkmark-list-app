import React, { useState, useContext } from 'react';
import spinner from '../../images/spinner.gif';
import { useHistory } from 'react-router-dom';
import { Heading, Input, Button } from '../ui';
import { TaskList, KeywordList } from './';
import TodosContext from '../../context/todos/todosContext';
import TasksContext from '../../context/tasks/tasksContext';

export const Card = ({ title, todoId, userId, tasks, keywords }) => {
  const todosContext = useContext(TodosContext);
  const { updateTodo, deleteTodo } = todosContext;

  const tasksContext = useContext(TasksContext);
  const { deleteTaskByTodoId } = tasksContext;

  const history = useHistory();

  const [isSpinning, setIsSpinning] = useState(false);
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

  const handleEditUpdate = async (event) => {
    event.preventDefault();

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

  const handleDeleteTodo = async () => {
    setIsSpinning(true);

    await deleteTaskByTodoId(todoId);
    await deleteTodo(todoId);

    history.push('/lists');
  };

  const handleCancel = () => {
    history.push('/lists');
  };

  if (isSpinning)
    return (
      <div className='w-120 border rounded overflow-hidden shadow-lg m-2 flex-auto'>
        <div className='w-120'>
          <img alt='spinner' src={spinner} />
        </div>
      </div>
    );

  return (
    <div className='w-120 border rounded overflow-hidden shadow-lg m-2 flex-auto'>
      <div>
        <div className='mb-2 border-b px-4 py-3'>
          {editTodo ? (
            <div>
              <form className='flex' onSubmit={handleEditUpdate}>
                <Input
                  id={todoId}
                  type='text'
                  placeholder='Enter a title'
                  name='title'
                  value={editTitle}
                  onChange={handleTitleChange}
                />{' '}
                <Button type='submit'>Update</Button>
                <Button type='button' color='gray' onClick={handleEditCancel}>
                  Cancel
                </Button>
              </form>
            </div>
          ) : (
            <div className='flex justify-between'>
              <Heading>{title}</Heading>{' '}
              <Button onClick={handleEditToggle} type='button'>
                Edit
              </Button>
            </div>
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
          {keywords && (
            <KeywordList
              keywords={keywords}
              editing={true}
              todoId={todoId}
              todoTitle={title}
              userId={userId}
            />
          )}
        </>
        <div className='mb-2 px-4 py-3 flex justify-end'>
          <Button type='button' color='red' onClick={handleDeleteTodo}>
            Delete Todo
          </Button>
          <Button type='button' color='gray' onClick={handleCancel}>
            Return to Lists
          </Button>
        </div>
      </div>
    </div>
  );
};
