import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks, editTask } from '../../../Redux/useraction';
import './TaskBoard.css';
import TaskColumn from '../TaskColumn/TaskColumn';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const TaskList = (props) => {
  useEffect(() => {
    props.getTasks();
  }, []);

  const moveTask = (taskId, newStatus) => {
    props.editTask(taskId, { status: newStatus });
  };

  return (
    <div className="task-board-container">
      {/* Task Board */}
      <DndProvider backend={HTML5Backend}>
        <div className="task-board">
          {['To Do', 'In Progress', 'Done'].map((status) => (
            <TaskColumn
              key={status}
              status={status}
              tasks={props.tasks.filter((task) => task.status === status)}
              moveTask={moveTask}
            />
          ))}
        </div>
      </DndProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
  editTask: (id, task) => dispatch(editTask(id, task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);