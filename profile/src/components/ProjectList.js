import React from 'react'

const ProjectList = ({projects, title, handleDelete}) => {
  // const projects = props.projects;
  // console.log(props, projects)
  return (
    <div className="Project-List">
      <h1>{title}</h1>
        {projects.map((project) => (
        <div className="card bg-light text-dark p-1 py-2 my-2" key={project.id}>
          <img src={project.img} width="100%" className="card-img" alt="..."></img>
          <div className="card-img">
              <h5 className="card-title">{project.title}</h5>
              <p className="card-text">{project.description}</p> 
              <p className="card-text small-text">Code by {project.author}</p>
              <button onClick={() => handleDelete(project.id)}>Delete projects</button>
          </div>
        </div> 
      ))}
    </div>


  )
}

export default ProjectList