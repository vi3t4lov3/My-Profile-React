import React, {useState} from 'react'
import '../assets/css/Project.css'
import Card from 'react-bootstrap/Card';
const Projects = () => {
    const [projects, setProjects] = useState([
      {title: 'Project 1', description: 'hello world', id: 1}, 
      {title: 'Project 2', description: 'wowowowwowo', id: 2}
    ]);

  return (
    <div className="Project">
      {/* {projects.map(project) => ()} */}
    <h1>PROJECT</h1>
<div className="card bg-light text-dark text-end py-2 my-2">
    {/* <img src="./img/AlertProject-2.png" width="100%" className="card-img" alt="..."> */}
    <div className="card-img">
        <h5 className="card-title">Stock Alert Tracker</h5>
        <p className="card-text">We're creating an app that users can log in with their personal credentials. As an investor, I should be able to create alerts for specific stocks of my choice and add them to a list. I should be able to follow other alerts created by other users. These alerts will send a message or a text when a stock goes up or down to a particular price target specified by the user.</p> 
        <a href="https://github.com/Danqest/15-Project2-Stock-Alert-Tracker" target="_blank" className="btn btn-primary">View Code</a> <a href="https://lit-waters-98495.herokuapp.com" target="_blank" className="btn btn-primary">Live Demo</a>
        <p className="card-text small-text">by Me, Colin Brooks, Charnay Birton & Harris Ai</p>
    </div>
</div>
    </div>
  )
}

export default Projects