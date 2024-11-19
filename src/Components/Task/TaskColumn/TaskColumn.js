import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from '../TaskCard/TaskCard';
import './TaskColumn.css';

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
      className={`task-column ${isOver ? 'is-over' : ''}`}
    >
      <h2 className="task-column-title">{status.toUpperCase()}</h2>
      <div className="task-column-content">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;