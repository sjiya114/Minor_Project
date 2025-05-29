
import React, { useContext, useEffect, useState } from 'react';
import './navbar.css';
import image from '../../../assets/lo.png';
import { StoreContext } from '../../../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '../../../assets/logout_icon.png';
import profile from '../../../assets/profile_icon.png';

const Navbar = ({ setShowLogin }) => {
 // const url = "http://localhost:5173/signin";
  const { token, setToken } = useContext(StoreContext);
  const [hidden,setHidden]=useState(true);
  const navigate = useNavigate();

  // Sync token from localStorage when component mounts
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  // Logging out the user
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(""); // Update state immediately
    navigate("/"); // Redirect to home
  };

  return (
    <div>
      <nav className="navbar">
        
        <div className="logo">
            <img src={image} style={{ width: 100, height: 65, paddingLeft:"5px", marginRight:"20px", marginLeft:"0px"}} alt="logo" />
          <p style={{ paddingTop: 18 }}> GLOBAL REVIEW </p>
           {screen.width<769 && hidden &&
          <div onClick={(e)=>{setHidden(!hidden)}} style={{marginTop:15,paddingLeft:20}} >
           <svg xmlns="http://www.w3.org/2000/svg"  style={{width:20,height:20}} viewBox="0 0 24 24" fill="white"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
         </div>
           }
        </div>

          {screen.width<769 && !hidden &&
          <div  style={{display:'flex',right:4,top:0,backgroundColor:'white', position:'absolute',flexDirection:'column',borderRadius:'3px'}}>
          <div className='togglebutton' onClick={(e)=>{setHidden(!hidden)}} >
           <svg xmlns="http://www.w3.org/2000/svg"  style={{width:20,height:20}} viewBox="0 0 24 24" fill="blue"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
         </div>
          <div style={{marginTop:10,marginLeft:10,marginRight:10}}>
            <a href="/category">Categories</a>
          </div>
          {!localStorage.getItem("token") &&
          <Link to='/signin'><button style={{fontWeight:'bold',marginTop:10,marginLeft:10,marginRight:10}}>Register</button></Link>
}
          {!token ? (
            
           <Link to='/login'><button style={{marginTop:10,marginLeft:10,marginRight:10,marginBottom:10}} onClick={() => setShowLogin(true)}>
           Login
         </button></Link>                                 
          ) : (
            <div className="dropdown" style={{marginTop:10,marginLeft:10,marginRight:10,marginBottom:10}}>
              <div className="nav-profile-dropdown">
                <a onClick={logout} style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{width:'30px',height:'30px'}} viewBox="0 0 24 24" fill="blue"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg>
                  <p style={{fontSize:15,color:'blue'}}>Log Out <svg style={{width:25,height:25,marginLeft:5}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg> </p>
                </a>
              </div>
            </div>
          )}
        </div>
          }












        <div className="menu">
          <div className="dropdown">
            <a href="/category" className="more">Categories</a>
          </div>
          {!localStorage.getItem("token") &&
          <Link to='/signin' style={{ marginRight: "0px", paddingRight: "20px" }}><button style={{fontWeight:'bold'}}>Register</button></Link>
}
          {!token ? (
            
           <Link to='/login'><button onClick={() => setShowLogin(true)}  style={{ marginLeft: "0px", paddingLeft: "15px" }}>
           Login
         </button></Link>                                 
          ) : (
            <div className="dropdown">
              <div className="nav-profile-dropdown">
                <a onClick={logout} style={{ cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{width:'30px',height:'30px'}} viewBox="0 0 24 24" fill="white"><path d="M4 18H6V20H18V4H6V6H4V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V18ZM6 11H13V13H6V16L1 12L6 8V11Z"></path></svg>
                  <p style={{fontSize:15}}>Log Out <svg style={{width:25,height:25,marginLeft:5}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg> </p>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
