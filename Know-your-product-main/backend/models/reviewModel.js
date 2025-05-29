import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productCategory: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    reviewTitle: { type: String, required: true },
    review: { type: String, required: true },
     
    userName: { type: String, required: false },
    image: { type:String, required: false },
    date:{type:Date,
      default:Date.now()
    },
    status: {type:String, default:"Pending"}
    // status: {type:String,  enum: ["Pending", "Approved", "Rejected"] , default:"Pending"}
  });
  

  //So that the new model must not be created
  const reviewModel =  mongoose.model('Review', reviewSchema);//modelName, schemaName
  
  export default reviewModel;