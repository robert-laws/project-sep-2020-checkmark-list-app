import React, { useReducer } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';
import {
  GET_TASKS_BY_TODO_ID,
  GET_TASKS_BY_USER_ID,
  UPDATE_TASK,
  TASKS_ERROR,
} from '../types';
import firebase from 'firebase/app';

const TasksState = ({ children }) => {
  const initialState = {
    tasks: null,
    tasksError: null,
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

  const getTasksByUserId = async (uid) => {
    try {
      const tasksSnapshot = await firebase
        .firestore()
        .collection('tasks')
        .where('userId', '==', uid)
        .get();

      const tasks = tasksSnapshot.docs.map((task) => ({
        ...task.data(),
        id: task.id,
      }));

      dispatch({ type: GET_TASKS_BY_USER_ID, payload: tasks });
    } catch (error) {
      dispatch({ type: TASKS_ERROR, payload: error.message });
    }
  };

  const updateTask = async (task) => {
    const { id, title, completed } = task;

    try {
      await firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({ title, completed });

      dispatch({ type: UPDATE_TASK, payload: task });
    } catch (error) {
      dispatch({ type: TASKS_ERROR, payload: error.message });
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        tasksError: state.tasksError,
        getTasksByTodoId,
        getTasksByUserId,
        updateTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksState;
