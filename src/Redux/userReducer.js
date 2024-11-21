import {
  ADD_TASK,
  DELETE_TASK,
  LOGIN_USER,
  SET_CURRENT_USER,
  LOGOUT_USER,
  GET_TASK_BY_ID,
  UPDATE_USER,
  GET_USER_BY_ID,
  EDIT_TASK,
  GET_TASKS,
  POP_UP_MESSAGE
} from './types'
const initialState = {
  isLoggedIn:false, // Check token presence
  userDetails: {},
  taskData: {},
  taskLoading: true,
  tasksLoading: true,
  tasks: [],
  popMessage:''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_USER_BY_ID:
      return {
        ...state,
        userDetails: action.payload,
        isLoggedIn: true
      }
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      }
      case POP_UP_MESSAGE:
        return {
          ...state,
          popMessage: action.payload
        }
    case SET_CURRENT_USER:
      localStorage.setItem('user', action.payload)
      return {
        ...state,
        userDetails: {
          ...action.payload.user
        },
        isLoggedIn: true
      }

    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false
      }
    case GET_TASK_BY_ID:
      const task = state.tasks.find(task => task.id == action.payload)
      return {
        ...state,
        taskData: task,
        taskLoading: false
      }
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        tasksLoading: false
      }

    case UPDATE_USER:
      return {
        ...state,
        userDetails: { ...state.userDetails, ...action.payload }
      }

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return action.payload.task
          }
          return task
        })
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          return task.id !== action.payload
        })
      }
    default:
      return state
  }
}

export default userReducer
