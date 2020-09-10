import React from 'react';
import { Task } from './';

export const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </>
  );
};
