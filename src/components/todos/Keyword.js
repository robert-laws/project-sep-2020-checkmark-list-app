import React, { useContext } from 'react';
import { Button } from '../ui';
import TodosContext from '../../context/todos/todosContext';

export const Keyword = ({
  id,
  title,
  keyword,
  keywords,
  userId,
  editing,
  separator,
}) => {
  const todosContext = useContext(TodosContext);
  const { updateTodo } = todosContext;

  const handleKeywordDelete = async (event) => {
    const removeKeyword = event.target.id;
    let newKeywords = keywords.filter((keyword) => keyword !== removeKeyword);

    console.log(newKeywords);

    const myTodo = {
      id,
      title,
      keywords: newKeywords,
      userId,
    };

    await updateTodo(myTodo);
  };

  return (
    <span className={`text-gray-700 pr-1 ${editing ? 'my-1' : ''}`}>
      {keyword}
      {separator}
      {editing ? (
        <Button
          type='button'
          onClick={handleKeywordDelete}
          size='x-small'
          color='red'
          id={keyword}
        >
          Delete
        </Button>
      ) : (
        ''
      )}
    </span>
  );
};
