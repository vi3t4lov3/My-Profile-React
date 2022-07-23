import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import Profile from '../components/Profile'

const Home = () => {
  // const [currentPage, setCurrentPage] = useState('Home');
  const [gitRepos, setGitRepos] = useState(null);
  useEffect (() => {
    const url = `https://api.github.com/users/vi3t4lov3/repos`;
    // axios.get(url) //using axios
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setGitRepos(data)
      console.log(data)
    })
    .catch(error => { console.log(error)}) 
  }, []);

  const title ='Tu Nguyen'
  const styles ={
    title: {
      color: '#060D35', 
      fontWeight: 'light'
    }
    
  }
  return (
    <div className="Home">
        <NavBar title={title} style={styles.title}/>
        <Profile />
        {gitRepos && <Footer gitRepos={gitRepos} /> }
    </div>
  )
}

export default Home