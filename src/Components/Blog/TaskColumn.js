import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';

const TaskColumn = ({ status, tasks, moveTask }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="task-column"
      style={{
        backgroundColor: isOver ? '#f0f8ff' : '#f8f9fa',
      }}
    >
      <h2 className="task-column-title">{status.toUpperCase()}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskColumn;