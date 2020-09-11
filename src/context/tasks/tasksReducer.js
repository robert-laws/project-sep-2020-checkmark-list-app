import {
  GET_TASKS_BY_TODO_ID,
  GET_TASKS_BY_USER_ID,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  TASKS_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_BY_TODO_ID:
      return {
        ...state,
        tasks: action.payload,
        tasksError: null,
      };

    case GET_TASKS_BY_USER_ID:
      return {
        ...state,
        tasks: action.payload,
        tasksError: null,
      };

    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        tasksError: null,
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
        tasksError: null,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        tasksError: null,
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
