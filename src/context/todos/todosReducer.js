import {
  GET_TODOS_BY_USER_ID,
  GET_TODO_BY_ID,
  CREATE_TODO,
  TODOS_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS_BY_USER_ID:
      return {
        ...state,
        todos: action.payload,
        todosError: null,
      };

    case GET_TODO_BY_ID:
      return {
        ...state,
        todo: action.payload,
        todosError: null,
      };

    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todosError: null,
      };

    case TODOS_ERROR:
      return {
        ...state,
        todosError: action.payload,
      };

    default:
      return state;
  }
};
