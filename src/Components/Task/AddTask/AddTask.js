import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './AddTask.css'
import { addTask, getTaskById ,editTask} from '../../../Redux/useraction'
import { useParams } from 'react-router-dom'

const AddTask = props => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [taskData, setTaskData] = useState({});

  const onChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      props.getTaskById(id);
    } else {
      setTaskData({
        title: '',
        description: '',
        user_id: props.user.id,
        status: 'To Do', // Default column
        dueDate: '',
        priority: 'Medium',
      });
    }

    if (!props.taskLoading && id) {
      setTaskData(props.taskData);
    }
    return () => {
      setTaskData({});
    };
  }, [props.taskLoading, id]);

  const addTask = () => {
    const newTask = {
      title: taskData.title,
      description: taskData.description,
      status: taskData.status,
      dueDate: taskData.dueDate,
      priority: taskData.priority,
    };
    props.addTask(newTask);
  };

  const editTask = () => {
    const updatedTask = {
      title: taskData.title,
      description: taskData.description,
      status: taskData.status,
      dueDate: taskData.dueDate,
      priority: taskData.priority,
      id: taskData.id,
    };
    props.editTask(id, updatedTask);
  };


  return (
    <div className='add-task-container'>
      <div className='add-task-form'>
        <h1>Add Task</h1>
        <input
          type='text'
          name='title'
          placeholder='Task Title'
          value={taskData.title}
          onChange={onChange}
        />
        <input
          type='text'
          name='description'
          placeholder='Task Description'
          value={taskData.description}
          onChange={onChange}
        />
        <select name='status' value={taskData.status} onChange={onChange}>
          <option value='To Do'>To Do</option>
          <option value='In Progress'>In Progress</option>
          <option value='Done'>Done</option>
        </select>
        <input
          type='date'
          name='dueDate'
          placeholder='Due Date'
          value={taskData.dueDate}
          onChange={onChange}
        />
        <select name='priority' value={taskData.priority} onChange={onChange}>
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
        <div
          className='modal'
          style={{ display: modal ? 'block' : 'none' }}
        >
        </div>
        {id ? (
          <div>
            <button className='btn-primary' onClick={() => editTask()}>
              Edit Task
            </button>
          </div>
        ) : (
          <button className='btn-primary' onClick={() => addTask()}>
            Add Task
          </button>
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    user: state.userDetails,
    taskLoading: state.taskLoading,
    taskData: state.taskData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTask(task)),
    getTaskById: (id) => dispatch(getTaskById(id)),
    editTask: (id, task) => dispatch(editTask(id, task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask)
