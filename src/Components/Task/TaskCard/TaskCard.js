import React from 'react';
import { useDrag } from 'react-dnd';
import "./TaskCard.css";
import { Link } from 'react-router-dom';
import { deleteTask } from '../../../Redux/useraction';
const { connect } = require('react-redux')

const TaskCard = (props) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TASK',
    item: { id: props.task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const deleteTask = (id)=>{
    props.deleteTask(id);
  }

  return (
    <div
      ref={drag}
      className="task-card"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <h3 className="task-card-title">{props.task.title}</h3>
      <p className="task-card-description">{props.task.description}</p>
      <p className="task-card-created">Due Date: {props.task.dueDate.split('T')[0]}</p>
      <p className="task-card-created">Created At: {props.task.createdAt}</p>
      <div className="task-card-actions">
        <button className="task-card-btn" onClick={()=>deleteTask(props.task.id)}>Delete</button>
        <button className="task-card-btn"> <Link to={`/edit-task/` + props.task.id}>Edit</Link></button>
       
        <button className="task-card-btn">View Details</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userDetails,
  }
}
const dispatchToProps = dispatch => {
  return {
    deleteTask: id => dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps, dispatchToProps)(TaskCard);