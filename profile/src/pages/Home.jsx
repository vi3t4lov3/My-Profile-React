import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

const Home = () => {
  return (
    <div className="Home">
        <Navbar/>
        <Profile />
        <Footer />
    </div>
  )
}

export default Home