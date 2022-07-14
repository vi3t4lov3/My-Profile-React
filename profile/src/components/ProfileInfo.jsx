import React from 'react'

import "../assets/css/ProfileInfo.css"
const Project = ({users}) => {
  return (
    <div className="ProfileInfo">
     <h1>Testing Data using props</h1>
     <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.login.uuid}>
            {`${user.name.first} ${user.name.last} (${user.location.street.nub})`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Project