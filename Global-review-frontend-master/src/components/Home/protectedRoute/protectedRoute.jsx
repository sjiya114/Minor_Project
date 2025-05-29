import React from 'react'

import { StoreContext } from '../../../context/StoreContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';



const protectedRoute = () => {

 
    const {token } = useContext(StoreContext);
    const nav = useNavigate();

    
  return (
    <div>
      if({token}){
        nav("/review")
      }else{
        nav("/login")
      }
    </div>
  )
}

export default protectedRoute
