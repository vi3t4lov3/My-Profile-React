import React, {useState} from 'react';
import ProfileCard from './ProfileCard';
import ProfileInfo from './ProfileInfo';
import "../assets/css/Profile.css"
import users from "../assets/data/users"
import fetchGitHub from "../assets/data/github"

const Profile = () => {
    
  return (
    <div className="Profile">
        <ProfileCard />
        <ProfileInfo users={users} />
    </div>
  )
}

export default Profile