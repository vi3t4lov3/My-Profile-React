import React from 'react'
import Cover from "../assets/img/cover.jpg";
import Profile from "../assets/img/profileImg.jpg";
import "../assets/css/ProfileCard.css"
const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        {/* <span>Tu Nguyen (Will)</span> */}
        <span>Full Stack Development</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>100</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
      <div className="ProfileMe">
      <p>My name is Tu Nguyen (Will), a web developer focused on full stack development.
      I am a hardworking and analytical individual who possesses strong problem-solving skills and a drive to learn new things. I have advanced knowledge in programming and web development. I am constantly looking to improve myself while growing in the computer science and technology fields.</p>
      </div>
    </div>
  )
}

export default ProfileCard