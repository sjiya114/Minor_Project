import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
      
       <Link to="/list">
       <div className="sidebar-option">
            <img src="" alt="" />
            <p>List Reviews</p>
        </div>
       </Link>
        <div className="sidebar-option">
            <img src="" alt="" />
            <p>Approved Reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar