import { React, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './UserProfile.css'
import { updateUser } from '../../Redux/useraction'
const UserProfile = props => {
 
  useEffect(() => {}, [props.user])
  const [formData, setFormData] = useState({})
  const onChange = e => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = tabIndex => {
    setActiveTab(tabIndex)
  }
  
  return (
    <div className='profile-wrapper'>
      <h1>User Profile</h1>
      <div className='tab-container'>
        <div className='tab-header'>
         
          <div
            key={1}
            className={`tab-item ${1 === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            {'Profile'}
          </div>
          <div
            key={2}
            className={`tab-item ${2 === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            {'My Task'}
          </div>
          <div
            key={3}
            className={`tab-item ${3 === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(3)}
          >
            {'Drafts'}
          </div>
        </div>
      </div>
      {activeTab == 1 && (
        <div>
          <img
            src='http://localhost:3001/man.png'
            alt='profile'
            className='author-avatar'
          />
          <p>{props.user.username}</p>
          <p>{props.user.email}</p>
          <input
            type='text'
            name='bio'
            placeholder='Bio'
            onChange={e => onChange(e)}
            value={props.user.bio}
          />
          <button
            className='blog-topic'
            onClick={() => props.updateUser(formData)}
          >
            Update
          </button>
        </div>
      )}
      {activeTab == 2 && (
        <div>
          <div />
        </div>
      )}
      {activeTab == 3 && (
        <div>
         <div/>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    user: state.userDetails
  }
}
const dispatchStateToProps = dispatch => {
  return {
    updateUser: data => dispatch(updateUser(data))
  }
}
export default connect(mapStateToProps, dispatchStateToProps)(UserProfile)
