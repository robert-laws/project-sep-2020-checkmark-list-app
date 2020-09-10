import { GET_TASKS_BY_TODO_ID, TASKS_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_BY_TODO_ID:
      return {
        ...state,
        tasks: action.payload,
      };

    case TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
