import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState ,useContext} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../../context/StoreContext';
function login() {
  const nav=useNavigate();
  //  const {username,setUsername} = useContext(StoreContext);
  const [user,setUser]=useState({
    yourEmail:"",
    yourPassword:""
   });
   const onChangeButton=(e)=>
   {
      setUser({...user,[e.target.name]:e.target.value});
   }
   const onSubmitButton=async(e)=>
   {
    e.preventDefault();
    // const formData = new FormData();
     let data={
      yourEmail:user.yourEmail,yourPassword:user.yourPassword
     };

    // formData.append("yourName", user.yourName); // "file" matches backend multer setup
    // formData.append("yourEmail",user.yourName);
    // formData.append("yourPassword",user.yourPassword);
    const res=await axios.post("http://localhost:5500/api/review/login",data);
    if(res.status===200)
    {
      let token=res.data.token;
      let user=res.data.yourName;
      console.log("hello");
      // console.log(user);
      localStorage.setItem("token",token);
      localStorage.setItem("username",user);
      let z=localStorage.getItem("username");
      // setUsername(user);
      console.log(localStorage.getItem("username"));
      // console.log("successfully created user"+token);
       if(res.data.success){
                    setUser({
                     yourEmail:"",
                     yourPassword:""
                    })
                    toast.success(res.data.message)
                    nav("/");

                 }
                 else{
                    toast.error(res.data.message);
                 }

    }
   }
    return (
        <div>
           <div className='login-popup'>
          <form onSubmit={onSubmitButton} className="login-popup-container">
            <div className="login-popup-title">
                <h2>Login</h2>
    
                <img   alt="" />
            </div>
            <div className="login-popup-inputs"> 
                <input name='yourEmail' onChange={onChangeButton} type="text" placeholder='Your Email' required />
                <input name='yourPassword' type="password" onChange={onChangeButton} placeholder='Password' required/>
            </div>
            <button type='submit'>Login</button>
            {/* <div style={{display:'flex', justifyItems:'start'}}>
             <input style={{width:24,height:24}} type="checkbox" required/>
            <div className="login-popup-condition">
              <p style={{paddingLeft: 15, paddingTop: 10}}>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            </div> */}
           
          </form>
        </div>
        </div>
      )
}

export default login
