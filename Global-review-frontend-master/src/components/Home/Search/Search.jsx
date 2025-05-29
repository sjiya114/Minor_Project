import React from 'react'
import { useLocation } from 'react-router-dom'
function Search() {
    const location = useLocation();
    const { searchresults } = location.state || {};
  return (
    <>
    <section className="reviews-section">
        <h2 style={{textAlign:"center",paddingBottom:15}} >Search Results</h2>
        <div className="review-grid"> 
         {searchresults.map((element,index)=>(
           <div className="review-card">
                <h3>{element.productName}</h3>
                <div className="reviewer-info">
                    <img src={`http://localhost:5500/uploads/${element.image}`} style={{   width: 160,
    height: 160 , borderRadius: '10px'}}  alt="User Image"/>
                    <div>
                        <strong>{element.reviewTitle}</strong> <span>{element.userName}</span>
                        <div className="stars">{element.rating}★</div>
                        <span className="time">{new Date(element.date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</span>

                    </div> 
                </div>
                <p>{element.review}</p>
            </div> 
         ))}
         </div>
         </section>
    </>
  )
}

export default Search