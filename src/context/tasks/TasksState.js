import React, { useReducer } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';
import { GET_TASKS_BY_TODO_ID, TASKS_ERROR } from '../types';
import firebase from 'firebase/app';

const TasksState = ({ children }) => {
  const initialState = {
    tasks: null,
    error: null,
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const getTasksByTodoId = async (id) => {
    try {
      const tasksSnapshot = await firebase
        .firestore()
        .collection('tasks')
        .where('todoId', '==', id)
        .get();

      const tasks = tasksSnapshot.docs.map((task) => ({
        ...task.data(),
        id: task.id,
      }));

      dispatch({ type: GET_TASKS_BY_TODO_ID, payload: tasks });
    } catch (error) {
      dispatch({ type: TASKS_ERROR, payload: error.message });
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        getTasksByTodoId,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksState;
