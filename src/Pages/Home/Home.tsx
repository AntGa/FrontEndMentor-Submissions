import React from 'react'
import Navbar from '../../components/Navbar'
import transition from '../../components/transition'

const Home = () => {
  return (
    <div className="content">
      <div className="welcome-screen">
        <h1>Welcome to My Submissions</h1>
        <p>Select a submission from the menu.</p>
      </div>
      <Navbar />
    </div>
  )
}

export default transition(Home)
