import React from 'react'
import "../assets/css/ProfileInfo.css"
import Projects from './Projects'
import Skills from './Skills'

const ProfileInfo = () => {
  return (
    <div className="ProfileInfo">
      <Projects />
      <Skills />
    </div>
  )
}

export default ProfileInfo