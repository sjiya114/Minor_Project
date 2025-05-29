// import "./reviewItems.css"

// import React, { useContext, useState } from 'react'

// //import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'

// const reviewItems = ({id, productName,
              
//     productCategory,
//     rating,
//     reviewTitle,
//     review,
//     userName , image}) => {

//   // const [itemCount, setItemCount] = useState(0)
//   const { url} = useContext(StoreContext);


//   return (
//     <div className='food-item'>
//       <div className="food-item-img-container">
//         {/* <img className='food-item-image' src={url+"/images/"+image} alt="" /> */}
      
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//             <p>{productName}</p>
//             {/* <img src={assets.rating_starts} alt="" /> */}
//         </div>
//         <p className="food-item-desc">{review}</p>
//         <p className="food-item-price">{userName}</p>
//       </div>
//     </div>
//   )
// }

// export default reviewItems


import React, { useEffect } from "react";
import axios from "axios"; 
import star from '../../assets/ss.png'

const ProductDetails = ({ productName,
    date,
    productCategory,
    rating,
    reviewTitle,
    review,
    userName,
    image }) => {
        const d=new Date(date);
        let options = {
            weekday: 'long',
            day: 'numeric',
            hour: "numeric",
        
            timeZone: 'Asia/Kolkata'
        };
        const hour = d.toLocaleTimeString("en-IN", options);
    // const [products, setProducts] = useState([]);
    // const [loading,setLoading]=useState(true);

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5500/api/review/list") 
    //         .then((response) =>{
    //             console.log(response.data.data);
    //             setProducts(response.data.data);
    //             // if(products.length>0){
    //             // setLoading(false);
    //             // console.log(products);
    //             // }    
    //             if(products.length>0){ 
    //             console.log(products);
    //             setLoading(false);
    //             }   
                        
    //         })
    //         .catch((error) => console.error("Error fetching product:", error));
    // }, []);
    // if (!products) return <p>Loading...</p>;

    return (
    //     <div style={{ backgroundColor: '#e6edf5', borderRadius: 10,padding:8, color: 'black' }}>
    //     <div style={{width:'100%'}} >
    //         <img style={{ width:'26vh',height:'26vh', paddingTop: 6 ,borderRadius:'10px', marginLeft: '25px'}} src={`http://localhost:5500/uploads/${image}`} alt="No Image available" />
    //     </div>
    //     <div>
    //         <h2 style={{ color: '#1a2639', paddingTop: 4, paddingBottom: 2, fontFamily: "Poppins, sans-serif" }}> {productName}</h2>
    //         <p style={{ paddingTop: 6 }}><strong>Category:</strong> {productCategory}</p>
    //         <p style={{ paddingTop: 6 }}><strong>Rating:</strong>  {rating}/5
    //           <img src={star} alt="" width={20} height={20} />
    //         </p>
    //         <p style={{ paddingTop: 6 }}><strong>Review:</strong> {reviewTitle} - {review}</p>
    //         <p style={{ paddingTop: 6 }}><strong>Reviewer:</strong> {userName}</p>
           
    //     </div>
    // </div>

   
    <section className="reviews-section">
 <div className="review-grid" style={{gridGap:'100px'}}>
       
<div className="review-card"> 
    <h3 style={{fontSize:22,fontWeight:"bold"}}>{productName}</h3>
    <div className="reviewer-info">
        <img src={`http://localhost:5500/uploads/${image}`} style={{   width: 160,
    height: 160 , borderRadius: '10px'}} alt="No image found"/>
        <div>
            <strong>{reviewTitle}</strong>   <span>{userName}</span>
            <div className="stars">{rating}
              <img src={star} alt="" style={{height:'10px', width: '10px'}} /></div>
            <span className="time">{hour}</span>
        </div> 
    </div>
    <p>{review}</p>
</div>
</div> 
</section>
    );
};

export default ProductDetails;