import express from "express"
import { addReview, listReview } from "../controllers/reviewController.js"
import multer from "multer"
import { signUp } from "../controllers/signupController.js";
import { loginUser } from "../controllers/loginController.js";

//Use this for get, post and other methods
const reviewRouter = express.Router();
import reviewModel from "../models/reviewModel.js";

const Storage = multer.diskStorage({

    // destination: (req, file, cb) => {
    //     cb(null, 'uploads/'); // Ensure 'uploads' directory exists
    // },
    // filename: (req, file, cb) => {
    //     cb(null, Date.now() + '-' + file.originalname);
    // }
  
    destination:"uploads",
    filename:(req,file,cb)=>{
        //To make file name unique
        return cb(null, `${Date.now()}${file.originalname}`)
    }
});


const upload = multer({storage:Storage})

reviewRouter.post("/add",upload.single("image"),addReview)
reviewRouter.get("/list",listReview)
reviewRouter.post("/signup", signUp)
reviewRouter.post("/login",loginUser)
reviewRouter.post("/update",async(req,res)=>
    {
    let {id,status}=req.body; 
    console.log(id+" "+String(status));
    let updatedReview=await reviewModel.findOneAndUpdate({_id:id},{status:status},{ new: true } );
    if(updatedReview){
    console.log(updatedReview);
    res.send({message:"successfully submitted review"});
    }
    });
// reviewRouter.put("/update-status/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { status } = req.body;
//         const reviewId = req.params.id;

//         const updatedReview = await reviewModel.findByIdAndUpdate(
//             id,
//             { status },
//             { new: true }
//         );

//         if (!updatedReview) {
//             return res.status(404).json({ message: "Review not found" });
//         }

//         res.json(updatedReview);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error });
//     }
// });


export default reviewRouter;