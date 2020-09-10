import React, { useReducer } from 'react';
import TodosContext from './todosContext';
import todosReducer from './todosReducer';
import { GET_TODOS_BY_USER_ID, TODOS_ERROR } from '../types';
import firebase from 'firebase/app';

const TodosState = ({ children }) => {
  const initialState = {
    todos: null,
    error: null,
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const getTodosByUserId = async (uid) => {
    try {
      const todosSnapshot = await firebase
        .firestore()
        .collection('todos')
        .where('userId', '==', uid)
        .get();

      const todos = todosSnapshot.docs.map((todo) => ({
        ...todo.data(),
        id: todo.id,
      }));

      dispatch({ type: GET_TODOS_BY_USER_ID, payload: todos });
    } catch (error) {
      dispatch({ type: TODOS_ERROR, payload: error.message });
    }
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        getTodosByUserId,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosState;
