import React, {useState} from 'react'
import '../assets/css/Project.css'
import ProjectList from './ProjectList';
import axios from 'axios';
// import fetchGitHub from '../assets/data/github.js'
import projectsdata from '../assets/data/projects'


const Projects = () => {
    // const [projects, setProjects] = useState([
    //   {title: 'Project 1', description: 'lorem dskfjslakjfsalkjflskadjflaskdjflksdjlksd', author: 'tunguyen', id: 1}, 
    //   {title: 'Project 2', description: 'wowowowwowo',author: 'tunguyen2', id: 2},
    //   {title: 'Project 3', description: 'wowowowwowo',author: 'tunguyen2', id: 3},
    //   {title: 'Project 4', description: 'wowowowwowo',author: 'tunguyen', id: 4}
    // ]);
    const [projects, setProjects] = useState(projectsdata)
    // const [projects, setProjects] = useState({});
    // const getGitHub = () => {
    //   const url = `https://api.github.com/users/vi3t4lov3/repos`;
    //     axios.get(url)
    //     .then(res => {
    //       // console.log(res.data)
    //     })
    //     .catch(error => { console.log(error)}) 
    //   }
    // getGitHub()
    const handleDelete = (id) => {
      const newProjects = projects.filter(project => project.id !== id)
      setProjects(newProjects);
    }
  return (
    <div className="Project">
      <ProjectList projects={projects} title = "PROJECTS" handleDelete={handleDelete}/>
      {/* <ProjectList projects={projects.filter((project) => project.author ==='tunguyen2')} title = "Tu Nguyen Projects" handleDelete={handleDelete}/> */}
    </div>
  )

}

export default Projects