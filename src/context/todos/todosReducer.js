import { GET_TODOS_BY_USER_ID, TODOS_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TODOS_BY_USER_ID:
      return {
        ...state,
        todos: action.payload,
        error: null,
      };

    case TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
