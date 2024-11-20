import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './UserProfile.css';
import { updateUser } from '../../Redux/useraction';

const UserProfile = (props) => {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setFormData({
      ...props.user,
      avatar: props.user.avatar || 1, // Default avatar to 1 if not set
    });
  }, [props.user]);

  const handleAvatarChange = (avatar) => {
    setFormData({ ...formData, avatar });
  };

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="profile-wrapper">
      <h1>User Profile</h1>
      <div className="tab-container">
        <div className="tab-header">
          <div
            key={1}
            className={`tab-item ${1 === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            Profile
          </div>
          <div
            key={2}
            className={`tab-item ${2 === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            My Task
          </div>
          <div
            key={3}
            className={`tab-item ${3 === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(3)}
          >
            Drafts
          </div>
        </div>
      </div>
      {activeTab === 1 && (
        <div className="profile-tab">
          <img
            src={`http://54.152.123.170:3000/${props.user.avatar}.png`}
            alt="profile"
            className="author-avatar"
          />
          <p>{props.user.name}</p>
          <p>{props.user.email}</p>
         
          <div className="avatar-selector">
            <p>Select an Avatar:</p>
            <div className="avatar-options">
              {[...Array(9)].map((_, index) => {
                const avatarNumber = index + 1;
                return (
                  <img
                    key={avatarNumber}
                    src={`http://54.152.123.170:3000/${avatarNumber}.png`}
                    alt={`avatar-${avatarNumber}`}
                    className={`avatar-option ${
                      formData.avatar === avatarNumber ? 'selected' : ''
                    }`}
                    onClick={() => handleAvatarChange(avatarNumber)}
                  />
                );
              })}
            </div>
          </div>
          <button
            className="task-topic"
            onClick={() => props.updateUser(props.user.id,{avatar:formData.avatar})}
          >
            Update
          </button>
        </div>
      )}
      {activeTab === 2 && <div>Tasks content here...</div>}
      {activeTab === 3 && <div>Drafts content here...</div>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userDetails,
  };
};

const dispatchStateToProps = (dispatch) => {
  return {
    updateUser: (id,data) => dispatch(updateUser(id,data)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(UserProfile);