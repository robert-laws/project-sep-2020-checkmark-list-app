import React, { useState, useEffect } from 'react';
import spinner from '../../images/spinner.gif';
import { Task } from './';

export const TaskList = ({ editing = false, tasks }) => {
  const [isSpinning, setIsSpinning] = useState(true);

  useEffect(() => {
    if (tasks) {
      setIsSpinning(false);
    }
  }, [tasks]);

  return (
    <div className='mb-2 border-b px-4 py-3'>
      {isSpinning && (
        <div className='w-40'>
          <img alt='spinner' src={spinner} />
        </div>
      )}

      {tasks && tasks.length === 0 && <h4>No Tasks</h4>}

      {!isSpinning &&
        tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            {...task}
            editTask={editing}
          />
        ))}
    </div>
  );
};
