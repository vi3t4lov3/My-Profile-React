import React from 'react';
import ProfileCard from './ProfileCard';
import Project from './Project';
import "../assets/css/Profile.css"
const Profile = () => {
  return (
    <div className="Profile container">
        <ProfileCard />
        <Project />
    </div>
  )
}

export default Profile