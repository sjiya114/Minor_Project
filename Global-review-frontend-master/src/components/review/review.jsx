import './review.css';
import {useNavigate } from "react-router-dom"
import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StoreContext } from '../../context/StoreContext';
function reviews() {
  const {selCategory}=useContext(StoreContext);
  const navigate = useNavigate()
  // const [image, setImage] = useState(false);
  const [data, setData] = useState({
    productName:"",
    productCategory: "Select Category",
    rating:0,
  
    reviewTitle:"",
    
    review:"",
    //image:image,
    username:localStorage.getItem("username"),
   image:""
  })


  const fileInput = useRef(null);

  const onChangeHandler=(e)=>
    {
       if(e.target.name==="rating")
       {
        setData({...data,[e.target.name]:Number(e.target.value)});
       }
       else if(e.target.name==="image")
       {
        setData({...data,[e.target.name]:e.target.files[0]});
       }
       else
       setData({...data,[e.target.name]:e.target.value});
      };



  const clickSubmit=async(e)=>
    {
       e.preventDefault();
       console.log(data);
    
    const formData = new FormData();
    formData.append("image", data.image); // "file" matches backend multer setup
    formData.append("productName", data.productName);
    formData.append("productCategory",selCategory);
    formData.append("rating", data.rating);
    formData.append("reviewTitle", data.reviewTitle);
    formData.append("review", data.review);
    formData.append("userName",localStorage.getItem("username"));
    // for (let [key, value] of formData.entries()) {
    //     console.log(${key}:, value);
    //   }
      const res=await axios.post("http://localhost:5500/api/review/add",formData, {
        headers: { "Content-Type": "multipart/form-data" }, // Required for file uploads
      });
      if(res.status===200)
        {
            console.log("successfully submitted form");
            // Window.location.reload();
            if(res.data.success){
                setData({
                  productName: "",
                  productCategory: "Select Category",
                  rating: 0,
                  reviewTitle: "",
                  review: "",
                  userName: "",
                  image: null, // Change from '' to null

                });
                if(fileInput.current){
                  fileInput.current.value="";
                }
              toast.success(res.data.message)
              navigate("/");
           }
           else{
              toast.error(res.data.message);
           }
        } 
    } 
//     useEffect(() => {
//       setData({
               
//         productName:"",
//          productCategory: "",
//          rating:"",
//          reviewTitle:"",
//          review:"",
//          userName:"",
//          image:''
//  })
//       }, []);
    
  // const clickSubmit=async(event)=>
  // {
    
  //   // if(res)
  //   // {
  //   //   console.log("submitted");
  //   // }
  //   const formData = new FormData();
  //   formData.append("productName", data.productName)
  //   formData.append("productCategory", data.productCategory)
  //   formData.append("rating", Number(data.rating))
  //   formData.append("reviewTitle", data.reviewTitle)
  //   formData.append("review", data.review)
  //   formData.append("userName", data.userName)
  //   formData.append("image", image)

  //   const res = await axios.post(" http://localhost:5500/api/review/add",formData,{
  //     headers:{"Content-Type":"multipart/form-data"},
  //   });
  //   if(res.status===200)
  //   {
  //     console.log("submitted form successfully");
  //   }

    
  // };


  return (
    <>
    <div className="reviewbody">
     <div className="header">GLOBAL REVIEW</div>
    <div className="review-container">
        <h2>Write a Product Review</h2>
        <form onSubmit={clickSubmit} encType='multipart/form-data'>
           

            <div className="form-group">
                <label htmlFor="product-category">Product Category</label>
                <select onChange={onChangeHandler} name='productCategory' id="product-category" value={selCategory} required>
                    <option value="">Select Category</option>
                    <option value="Appliances">Appliances</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Books">Books</option>
                    <option value="Cars">Cars</option>
                    <option value="CoffeeMachines">Coffee Machines</option>
                    <option value="Diet">Diet and Weight Loss Products</option>
                   
                    <option value="Electronics">Electronics</option>
                   
                    <option value="Fashion">Fashion</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Furniture">Furniture</option>
                    <option value="HomeBuilders">Home Builders</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Prams">Prams and Strollers</option>

                    <option value="Sports">Sports</option>
                    <option value="Tyres">Tyres</option>
                    <option value="Vaccum">Vaccum Cleaners</option>
                    <option value="WashingMachine">Washing Machine</option>
                    <option value="Others">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="product-name">Product Name</label>
                <input onChange={onChangeHandler} value={data.productName} name='productName' type="text" id="product-name" placeholder="Enter product name" required/>
            </div>

            <div className="form-group">
                <label>Rating</label>
                <div className="rating">
                    <input onChange={onChangeHandler} type="radio" id="star5" name="rating" checked={data.rating===5} value="5" /><label htmlFor="star5">&#9733;</label>
                    <input onChange={onChangeHandler} type="radio" id="star4" name="rating" checked={data.rating===4} value="4"/><label htmlFor="star4">&#9733;</label>
                    <input onChange={onChangeHandler} type="radio" id="star3" name="rating" checked={data.rating===3} value="3"/><label htmlFor="star3">&#9733;</label>
                    <input onChange={onChangeHandler} type="radio" id="star2" name="rating" checked={data.rating===2} value="2"/><label htmlFor="star2">&#9733;</label>
                    <input onChange={onChangeHandler} type="radio" id="star1" name="rating" checked={data.rating===1} value="1"/><label htmlFor="star1">&#9733;</label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="review-title">Review Title</label>
                <input onChange={onChangeHandler} value={data.reviewTitle} name='reviewTitle' type="text" id="review-title" placeholder="Enter a short title"/>
            </div>

            <div className="form-group">
                <label htmlFor="review-text">Review</label>
                <textarea onChange={onChangeHandler} value={data.review} name='review' id="review-text" placeholder="Write your review here..." required></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="upload-image">Upload Image</label>
                {/* <input type="file" name="image" /> */}
                <input onChange={onChangeHandler} type="file" id='image' name='image'  ref={fileInput}/> 
            </div>

            <div className="form-group">
                <label htmlFor="username">Your Name (Optional)</label>
                <input onChange={onChangeHandler} style={{color:'black'}} value={String(localStorage.getItem("username"))} type="text" id="username" name='userName' placeholder={localStorage.getItem("username")}/>
            </div>
            <button type="submit" className="submit-btn">Submit Review</button>
            
        </form>
    </div>
    </div>
    </>
  )
}

export default reviews

