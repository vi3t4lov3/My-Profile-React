import React from 'react'
// import ProfileImage from "../assets/img/profileImg.jpg";
import '../assets/css/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar bg-light navbar navbar-expand-lg navbar-light container'>
          <div className="container">
            <a className="nav-link d-flex" href="index.html"> <span><h1>Tu Nguyen</h1></span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="index.html" alt="home page">Home</a></li>
                    <li className="nav-item"><a class="nav-link" href="#about" alt="about me">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio" alt="my portfolio">Project</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact" alt="click here to contact me">Contact</a></li>
                </ul>
            </div>
        </div>
        </div>
  )
}

export default Navbar