import React from 'react'
import Navbar from './navbar/navbar.jsx'
import Section from './Body/section.jsx'
import { useState } from 'react';

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      <Navbar setShowLogin={setShowLogin}/>
      <Section/>
    </div>
  )
}

export default Home
