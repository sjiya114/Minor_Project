import reviewModel from "../models/reviewModel.js";
import multer from "multer";
//Importing file system
import fs from 'fs';

//Add Food Items

const addReview = async (req, res) => {
 
    const image_filename = req.file.filename;
   
    const review = new reviewModel({
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        rating: req.body.rating,
        reviewTitle: req.body.reviewTitle,
      
        review: req.body.review,
        image:image_filename,
        userName: req.body.userName
        
    })
   
    try {
        //Using this method we are saving the review in the database
        await review.save();
        res.json({success:true, message:"Review Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

//All Review list
const listReview = async (req,res) => {
    try {
        const reviews = await reviewModel.find({});
        res.json({success:true, data:reviews})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}



export {addReview,listReview}