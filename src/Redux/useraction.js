import axios from 'axios'
import setAuthenticationToken from './setAuth'

import {
  GET_USER_BY_ID,
  LOGIN_USER,
  LOGOUT_USER,
  SET_CURRENT_USER,
  GET_TASK_BY_ID,
  UPDATE_USER,
  GET_LIST,
  GET_FILTER_TASKS,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  GET_TASKS,
  POP_UP_MESSAGE,
} from './types'

export const signupUser = (email, password, name) => {
  return function (dispatch) {
    var OPTIONS = {
      url: 'http://54.152.123.170:3000/v1/auth/register',
      method: 'POST',
      data: {
        email: email,
        password: password,
        name: name
      },

      headers: {
        'content-type': 'application/json'
      }
    }

    axios(OPTIONS)
      .then(res => {
        // dispatch({
        //   // type: SIGNUP_USER,
        //   isLoggedIn: true
        // })
        // localStorage.setItem('token', res.data.token)
        // setAuthenticationToken(res.data.token);
        // dispatch(
        //   setCurrentUser({
        //     user: res.data.user
        //     // token: jwt.decode(res.data.token),
        //   })
        // )
        if (res.data.status.code === 200) {
          dispatch({
            type: LOGIN_USER,
            isLoggedIn: true
          })
        }
        window.location.href = '/'
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const loginUser = (username, password) => {
  return function (dispatch) {
    var OPTIONS = {
      url: 'http://54.152.123.170:3000/v1/auth/login',
      method: 'POST',
      data: {
        email: username,
        password: password
      },
      headers: {
        'content-type': 'application/json'
      }
    }

    axios(OPTIONS)
      .then(res => {
        const token = res.data.tokens.access.token;
        localStorage.setItem('token', token)
        setAuthenticationToken(token)
        console.log(res.data.user,token)
        if (res.data.user) {
          dispatch(getUserById(res.data.user.id))
          dispatch({
            type: LOGIN_USER,
            isLoggedIn: true
          })
        }
      })
      .catch(err => {
        // dispatch(showMessage("warning", "Invalid credentials", 900));
        // dispatch({
        //     type: LOGIN_USER_ERROR,
        //     payload: "Invalid credentials",
        //     isLoggedIn: false,
        // });
        console.log(err)
      })
  }
}

export const setCurrentUser = user => {
  return function (dispatch) {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    })
  }
}

export const logoutUser = () => {
  return function (dispatch) {
    localStorage.removeItem('token')
    dispatch(setCurrentUser({ user: {}, token: {} }))
    dispatch({
      type: LOGOUT_USER
    })
    window.location.href = '/'
  }
}

export const getTaskById = id => {
  return function (dispatch) {
    var OPTIONS = {
      url: `http://54.152.123.170:3000/v1/task/${id}`,
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }

    axios(OPTIONS)
      .then(res => {
        // dispatch({
        //   type: GET_TASK_BY_ID,
        //   payload: res.data.post
        // })
      })
      .catch(err => {
        console.log(err)
      })
    dispatch({
      type: GET_TASK_BY_ID,
      payload: id
    })
  }
}

export const addTask = task => {
  return function (dispatch) {
    var OPTIONS = {
      url: 'http://54.152.123.170:3000/v1/task',
      method: 'POST',
      data: task,
      headers: {
        'content-type': 'application/json'
      }
    }

    axios(OPTIONS)
      .then(res => {
        dispatch({
          type: ADD_TASK,
          payload: res.data
        })
        dispatch({
          type:POP_UP_MESSAGE,
          payload:"Task Added!!"
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type:POP_UP_MESSAGE,
          payload:err.response.data.message
        })
      })
  }
}

export const updateUser = (id,data) => {
  return function (dispatch) {
    var OPTIONS = {
        url: "http://54.152.123.170:3000/v1/users/" + id,
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        data:data
    };

    axios(OPTIONS)
        .then((res) => {
          dispatch({
            type: UPDATE_USER,
            payload: res.data
          })
          dispatch({
            type:POP_UP_MESSAGE,
            payload:"Profile Updated!!"
          })
        })
        .catch((err) => {
            console.log(err);
        });
    
  }
}

export const getTasks = () => {
  return function (dispatch) {
    var OPTIONS = {
      url: 'http://54.152.123.170:3000/v1/task',
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }

    axios(OPTIONS)
      .then(res => {
        dispatch({
          type: GET_TASKS,
          payload: res.data.results
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const getList = id => {
  return function (dispatch) {
    dispatch({
      type: GET_LIST,
      payload: id
    })
  }
}
export const editTask = (id, task) => {
  return function (dispatch) {
    var OPTIONS = {
      url: 'http://54.152.123.170:3000/v1/task/'+id,
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      data: task
    }

    axios(OPTIONS)
      .then(res => {
        dispatch({
          type: EDIT_TASK,
          payload: { id, task:res.data }
        })
        dispatch({
          type:POP_UP_MESSAGE,
          payload:"Task Updated!!"
        })
      })
      .catch(err => {
        console.log(err)
      })
    
  }
}
export const getFilterTasks = (searchText, filter) => {
  let url = ''
  let data = {}

  if (filter === 'Topic') {
    url = 'http://54.152.123.170:3000/post/search/topic'
    data = { topic: searchText }
  } else if (filter === 'Title') {
    url = 'http://54.152.123.170:3000/post/search/title'
    data = { title: searchText }
  } else if (filter === 'Author') {
    url = 'http://54.152.123.170:3000/post/search/author'
    data = { name: searchText }
  }

  return function (dispatch) {
    var OPTIONS = {
      url: url,
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: data
    }

    axios(OPTIONS)
      .then(res => {
        dispatch({
          type: GET_FILTER_TASKS,
          payload: res.data.posts
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const getUserById = id => {
  return function (dispatch) {
    var OPTIONS = {
      url: 'http://54.152.123.170:3000/v1/users/' + id,
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    }

    axios(OPTIONS)
      .then(res => {
        dispatch({
          type: GET_USER_BY_ID,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const deleteTask = id => {
  return function (dispatch) {
    var OPTIONS = {
      url: 'http://54.152.123.170:3000/v1/task/'+id,
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    }

    axios(OPTIONS)
      .then(res => {
        dispatch({
          type: DELETE_TASK,
          payload: id
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const moveTask = (taskId, newStatus) => ({
  type: 'MOVE_TASK',
  payload: { taskId, newStatus },
});

export const setPopMessage = (message) => {
  return function (dispatch) {
    dispatch({
      type: POP_UP_MESSAGE,
      payload: message
    })
  }
}
