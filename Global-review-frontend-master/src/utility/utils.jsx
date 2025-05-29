import React from 'react'
import {Routes, Route} from "react-router-dom" 
import Home from '../components/Home/Home.jsx'
import Login from '../components/Home/login/login.jsx'
import SignIn from '../components/Home/signup/signup.jsx'
import Review from '../components/review/review.jsx'
import Category from '../components/Home/categoryPage/category.jsx'
import Search from '../components/Home/Search/Search.jsx'
import ProtectedRoute from '../components/Home/protectedRoute/protectedRoute.jsx'
import { StoreContext } from '../context/StoreContext.jsx';
import { useContext } from 'react'
import Terms from '../components/Home/signup/terms.jsx'
//import Signin from '../components/Home/signin/signin.jsx'

const utils = () => {
  const {token}=useContext(StoreContext);
  return (
      <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route> 
        <Route path='/review' element={<Review/>}></Route>
         {/* {token==="" ?  < Route path='/login' element={<Login/>} />: <Route path='/review' element={<Review/>}/>} */}
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/category' element={<Category/>} ></Route>
        <Route path='/searchresults' element={<Search/>}></Route>
        <Route path='/terms' element={<Terms/>}> </Route>
      </Routes>
    </div>
  )
}

export default utils
