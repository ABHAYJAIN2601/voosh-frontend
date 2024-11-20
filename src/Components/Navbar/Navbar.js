import React from 'react'
import { connect } from 'react-redux'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { logoutUser } from '../../Redux/useraction';
const Navbar = (props) => {
  return (
    <nav className="navbar">
  <div className="navbar-container">
    <div className="logo">
      <a href="#">Taskly ✨</a>
    </div>
    <div>
    <ul className="nav-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/my-profile">My Profile</Link>
      </li>
      <li>
        <Link to="/add-task">Add Task</Link>
      </li>
      <li>
        <img
          className="navbar-profile"
          src={`http://54.152.123.170:3000/${props.userAvatar ? props.userAvatar : '1'}.png`}
          alt="user-profile"
        />
      </li>
      <li>
        <Link>{props.userName ? props.userName : 'Sign In'}</Link>
      </li>
      <li className="logout-btn">
        <Link onClick={() => props.logoutUser()}>Log Out</Link>
      </li>
    </ul>
    </div>
   
  </div>
</nav>
  )
}
const mapStateToProps = state => {
  return {
    userName: state.userDetails.name,
    userAvatar: state.userDetails.avatar,
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
