import userData from "../models/userData.js";
import multer from "multer";
//Importing file system
import fs from 'fs';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
//Add Food Items

// const signUp = async (req, res) => {
 

   
//     const signup  = new userData({
//         youryourName: req.body.youryourName,
//         youryourEmail:req.body.youryourEmail,
//         youryourPassword:req.body.youryourPassword
//     })
//     try {
//         //Using this method we are saving the review in the database
//         await signup.save();
//         res.json({success:true, message:"Created Account Successfully"})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false, message:"Error"})
//     }
// }
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}
//REGISTER USER
const signUp = async (req, res) =>{
    const {yourName, yourPassword, yourEmail, phone} = req.body;
    try{

       //  checking if user already exist
      const exists = await userData.findOne({yourEmail});
      if(exists){
        return res.json({success:false, message:"User already exists"})
      }

      //validating yourEmail format and strong yourPassword
      if (!validator.isEmail(yourEmail)) {
        return res.json({success:false, message:"Please enter a valid yourEmail"})
      }

      if (yourPassword.length < 8) {
        return res.json({success:false, message:"Please enter a strong yourPassword"})
      }

       //HASHING USER yourPassword
       //RANGE of gensalt is 5 to 15
       const salt = await bcrypt.genSalt(10)
       const hashedyourPassword = await bcrypt.hash(yourPassword,salt);

       const newUser = new userData({
        yourName:yourName,
        yourEmail:yourEmail,
        yourPassword:hashedyourPassword,
        phone:phone
       })
        
       //For saving user data
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,message:"account created successfully",token:token,yourName:yourName});

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}


export {signUp}