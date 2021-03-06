import React, { useReducer, useCallback } from 'react';
import TasksContext from './tasksContext';
import tasksReducer from './tasksReducer';
import {
  GET_TASKS_BY_TODO_ID,
  GET_TASKS_BY_USER_ID,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  TASKS_ERROR,
  DELETE_TASK_BY_TODO_ID,
} from '../types';
import firebase from 'firebase/app';

const TasksState = ({ children }) => {
  const initialState = {
    tasks: null,
    tasksError: null,
  };

  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const getTasksByTodoId = useCallback(
    async (id) => {
      try {
        const tasksSnapshot = await firebase
          .firestore()
          .collection('tasks')
          .orderBy('createdAt', 'asc')
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
    },
    [dispatch]
  );

  const getTasksByUserId = useCallback(
    async (uid) => {
      try {
        const tasksSnapshot = await firebase
          .firestore()
          .collection('tasks')
          .orderBy('createdAt', 'asc')
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
    },
    [dispatch]
  );

  const createTask = async (task) => {
    try {
      const newTask = await firebase.firestore().collection('tasks').add(task);
      const taskObject = {
        id: newTask.id,
        ...task,
      };

      dispatch({ type: CREATE_TASK, payload: taskObject });
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

  const deleteTask = async (id) => {
    try {
      await firebase.firestore().collection('tasks').doc(id).delete();
      dispatch({ type: DELETE_TASK, payload: id });
    } catch (error) {
      dispatch({ type: TASKS_ERROR, payload: error.message });
    }
  };

  const deleteTaskByTodoId = async (todoId) => {
    try {
      const tasks = await firebase
        .firestore()
        .collection('tasks')
        .where('todoId', '==', todoId)
        .get();

      if (tasks.docs.length !== 0) {
        tasks.forEach((task) => {
          task.ref.delete();
          dispatch({ type: DELETE_TASK_BY_TODO_ID, payload: todoId });
        });
      }
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
        createTask,
        updateTask,
        deleteTask,
        deleteTaskByTodoId,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksState;
