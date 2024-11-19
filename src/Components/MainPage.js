import LoginPage from './LoginPage/LoginPage'
import jwt from 'jsonwebtoken'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import SignUp from './SignUp'
import Navbar from './Navbar/Navbar'
import UserProfile from './UserProfile/UserProfile'
import ProtectedRoute from './ProtectedRoute'
import { getUserById } from '../Redux/useraction'
import setAuthToken from '../Redux/setAuth'
import AddTask from './Blog/AddTask'
import TaskList from './Blog/TaskList'

function MainPage (props) {

  const navigate = useNavigate()
  useEffect(() => {
    function fetchData() {
      const token = localStorage.getItem('token');
      if(token){
        console.log(jwt.decode(token, 'thisisasamplesecret'));
        props.getUserById(jwt.decode(token, 'thisisasamplesecret').sub);
        setAuthToken(token);
      }
      
    }
    fetchData();
 
    if (props.isLoggedIn) {
      navigate('/')
    } else {
      navigate('/login')
    }
  
  }, [props.isLoggedIn])
  return (
    <div className='App'>
      <Navbar />
      {/* <Payment /> */}
      <Routes>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <TaskList />
            </ProtectedRoute>
          }
        />
     
        <Route
          path='/add-task'
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        />
          <Route
          path='/edit-task/:id'
          element={
            <ProtectedRoute>
              <AddTask />
            </ProtectedRoute>
          }
        />
        <Route
          path='/my-profile'
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.userDetails
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getUserById: id => dispatch(getUserById(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainPage)