import express from "express"
import cors from "cors"
 import { connectDB } from "./configuration/db.js"
 import reviewRouter from "./routes/reviewRoute.js"
 import multer from "multer"
 import ReviewModel from "./models/reviewModel.js"
 import 'dotenv/config'
//App Configuration
const app = express()
const port =5500;
//middleware
app.use(express.json()) // For recieving request from frontend to the backend
app.use(cors()) //To access the backend from any frontend
app.use('/uploads', express.static('uploads'));

//Connection of Database
connectDB();

//API eNDPOINTS
app.use("/api/review",reviewRouter)
app.use("/images", express.static('uploads'))


//For requesting data from the server
app.get("/",(req,res) => {
  res.send("API Working")
})






//Running the server
app.listen(port,()=> {
    console.log(`Server started on http://localhost:${port}`);
    
})

// mongodb+srv://mithlesh26cs071:<db_password>@cluster0.gaqyu.mongodb.net/?

//zIlG0i1kXQ2iszdL