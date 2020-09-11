import React, { useReducer } from 'react';
import TodosContext from './todosContext';
import todosReducer from './todosReducer';
import {
  GET_TODOS_BY_USER_ID,
  GET_TODO_BY_ID,
  CREATE_TODO,
  TODOS_ERROR,
} from '../types';
import firebase from 'firebase/app';

const TodosState = ({ children }) => {
  const initialState = {
    todos: null,
    todo: null,
    todosError: null,
  };

  const [state, dispatch] = useReducer(todosReducer, initialState);

  const getTodosByUserId = async (uid) => {
    try {
      const todosSnapshot = await firebase
        .firestore()
        .collection('todos')
        .orderBy('createdAt', 'asc')
        .where('userId', '==', uid)
        .get();

      const todos = todosSnapshot.docs.map((todo) => ({
        ...todo.data(),
        id: todo.id,
      }));

      dispatch({ type: GET_TODOS_BY_USER_ID, payload: todos });
    } catch (error) {
      console.log(error);
      dispatch({ type: TODOS_ERROR, payload: error.message });
    }
  };

  const getTodoById = async (todoId) => {
    try {
      const todo = await firebase
        .firestore()
        .collection('todos')
        .doc(todoId)
        .get();

      const myTodo = {
        ...todo.data(),
        id: todo.id,
      };

      dispatch({ type: GET_TODO_BY_ID, payload: myTodo });
    } catch (error) {
      dispatch({ type: TODOS_ERROR, payload: error.message });
    }
  };

  const createTodo = async (todo) => {
    try {
      const newTodo = await firebase.firestore().collection('todos').add(todo);
      const todoObject = {
        id: newTodo.id,
        ...todo,
      };

      dispatch({ type: CREATE_TODO, payload: todoObject });
    } catch (error) {
      dispatch({ type: TODOS_ERROR, payload: error.message });
    }
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        todo: state.todo,
        todosError: state.todosError,
        getTodosByUserId,
        getTodoById,
        createTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosState;
