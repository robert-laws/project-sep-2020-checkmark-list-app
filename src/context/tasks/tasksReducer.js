import {
  GET_TASKS_BY_TODO_ID,
  GET_TASKS_BY_USER_ID,
  TASKS_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_BY_TODO_ID:
      return {
        ...state,
        tasks: action.payload,
      };

    case GET_TASKS_BY_USER_ID:
      return {
        ...state,
        tasks: action.payload,
      };

    case TASKS_ERROR:
      return {
        ...state,
        tasksError: action.payload,
      };

    default:
      return state;
  }
};
