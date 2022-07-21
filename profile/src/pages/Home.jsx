import React, {useState} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Profile from '../components/Profile'

const Home = () => {
  const [currentPage, setCurrentPage] = useState('Home');


  const title ='Tu Nguyen'
  const styles ={
    title: {
      color: 'blue', 
      fontWeight: 'light'
    }
    
  }
  return (
    <div className="Home">
        <NavBar title={title} style={styles.title}/>
        <Profile />
        <Footer />
    </div>
  )
}

export default Home