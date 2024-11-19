import React, { useEffect, useState } from 'react'
import './Blog.css'
const { connect } = require('react-redux')
const { useParams } = require('react-router-dom')

const {
  getTaskById
} = require('../../Redux/useraction')

function Blog (props) {
  const params = useParams()

  useEffect(() => {
    props.getTaskById(params.id)
  }, [])

  return (
    <div>
      
      {props.blogLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='blog-container'>
          {/* <button
            className='three-dots-btn'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            ...
          </button>
          {showDropdown && (
            <div className='dropdown'>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          )} */}
          <h1 className='blog-title'>{props.blogData.title}</h1>
          <div className='author-section'>
            <img
              className='author-avatar'
              src={'http://localhost:3001/blog1.webp'}
              alt={props.blogData.title}
            />
            <span className='blog-author'>{props.blogData.author}</span>
            <span className='blog-date'>
              {props.blogData.dueDate.split('T')[0]}
            </span>
            <p className='blog-topic'>{props.blogData.topic}</p>
          </div>

          <img
            className='blog-img'
            src={
              'https://miro.medium.com/v2/resize:fit:4800/0*a6ca3dUuTTQqcDHJ'
            }
            alt={props.blogData.title}
          />
          <p className='blog-content'>{props.blogData.body}</p>
       
    
        </div>
     )}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    blogData: state.taskData,
    user: state.userDetails,
    blogLoading: state.taskLoading
  }
}
const dispatchToProps = dispatch => {
  return {
    getTaskById: id => dispatch(getTaskById(id))
  }
}

export default connect(mapStateToProps, dispatchToProps)(Blog)
