import userData from "../models/userData.js";
import multer from "multer";
//Importing file system
import fs from 'fs';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}


const loginUser = async (req, res) =>{
    const {yourEmail, yourPassword} = req.body;
    try{
      const user = await userData.findOne({yourEmail})
      if(!user){
          return res.json({success:false, message:"User does not exist"})
      }
      const isMatch = await bcrypt.compare(yourPassword, user.yourPassword)
      if(!isMatch){
         return res.json({success:false, message:"Invalid Credentials"})
      }
      const token = createToken(user._id);
      res.json({success:true,message:"Logged in successfully",token:token,yourName:user.yourName});
  
    }catch (error){
      console.log(error);
      res.json({success:false, message:"Error"})
      
    }
  }


  export {loginUser}