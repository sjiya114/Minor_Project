// import './reviewDisplay.css';
// import React, { useContext,useEffect } from 'react'
// import ReviewItems from '../reviewItems/reviewItems';
// import { StoreContext } from '../../context/StoreContext'

// const ReviewDisplay = () => {

//    const {reviewlist,fetchReviewList} = useContext(StoreContext);
//    useEffect(() => {
//     fetchReviewList(); // Fetch the review data when the component mounts
//     console.log(reviewlist);
// }, []); 

//   return (
//     <div className='food-display' id='food-display'>
//       <h2 >Know Your Product Reviews</h2>
//       <div className="food-display-list">
//         {reviewlist && reviewlist.length>0 && reviewlist.map((item, index)=>(


//           // if(productCategory === "All" || productCategory===item.productCategory){
//           //    return <ReviewItems key={index} id={item._id} 
//           //         productName={item.productName}
//           //         productCategory={ item.productCategory}
//           //         rating={item.rating}
//           //         reviewTitle= {item.reviewTitle}
//           //         review = { item.review}
//           //         userName= {item.userName}
//           //         image={item.image}
//           //         date = {item.date}/>
//           // }



//           <div>
//              <ReviewItems key={index} id={item._id} 
//                 productName={item.productName}
//                 productCategory={ item.productCategory}
//                 rating={item.rating}
//                 reviewTitle= {item.reviewTitle}
//                 review = { item.review}
//                 userName= {item.userName}
//                 image={item.image}
//                date = {item.date}/>
//                 </div>

//         ))} 
      
//       </div> 
      
//       {/* <div className='food-display-list'>
//         <ReviewItems/>
//       </div> */}
      
//     </div>
//   )
// }

// export default ReviewDisplay

//NEW ONE

// import './reviewDisplay.css';
// import React, { useContext, useEffect } from 'react';
// import ReviewItems from '../reviewItems/reviewItems';
// import { StoreContext } from '../../context/StoreContext';

// const ReviewDisplay = ({ selectedCategory }) => {
//   const { reviewlist, fetchReviewList } = useContext(StoreContext);

//   // useEffect(() => {
//   //   fetchReviewList(); 
//   // }, []);

//   // Filter reviews based on selected category
//   const filteredReviews = selectedCategory === "All"
//     ? reviewlist 
//     : reviewlist.filter(item => item.productCategory === selectedCategory);

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Know Your Product Reviews</h2>
//       <div className="food-display-list">
//         {filteredReviews && filteredReviews.length > 0 ? (
//           filteredReviews.map((item, index) => (
//             <>
//          {item.status === "Approved"  &&
//             <ReviewItems 
//               key={index} 
//               id={item._id} 
//               productName={item.productName}
//               productCategory={item.productCategory}
//               rating={item.rating}
//               reviewTitle={item.reviewTitle}
//               review={item.review}
//               userName={item.userName}
//               image={item.image}
//               date={item.date} />
//         }
//             </>
//           ))
//         ) : (
//           <p>No reviews available for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewDisplay;


import './reviewDisplay.css';
import React, { useContext } from 'react';
import ReviewItems from '../reviewItems/reviewItems';
import { StoreContext } from '../../context/StoreContext';

const ReviewDisplay = ({ selectedCategory, sortByRating }) => {
  const { reviewlist } = useContext(StoreContext);

  // Filter reviews based on selected category
  let filteredReviews = selectedCategory === "All"
    ? reviewlist 
    : reviewlist.filter(item => item.productCategory === selectedCategory);

  // Sorting ka implementation filtered reviews pe
  if (sortByRating) {
    filteredReviews = [...filteredReviews].sort((a, b) => 
      sortByRating === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
  }

  return (
    <>
    <div className='food-display' id='food-display'>
      <h2>Know Your Product Reviews</h2>
      <div className="food-display-list">
        {filteredReviews && filteredReviews.length > 0 ? (
          filteredReviews.map((item, index) => (
            item.status === "Approved" && (
              <ReviewItems 
                key={index} 
                id={item._id} 
                productName={item.productName}
                productCategory={item.productCategory}
                rating={item.rating}
                reviewTitle={item.reviewTitle}
                review={item.review}
                userName={item.userName}
                image={item.image}
                date={item.date} 
              />
            )
          ))
        ) : (
          <p>No reviews available for this category.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default ReviewDisplay;




// import './reviewDisplay.css';
// import React, { useContext, useEffect, useState } from 'react';
// import ReviewItems from '../reviewItems/reviewItems';
// import { StoreContext } from '../../context/StoreContext';

// const ReviewDisplay = ({ selectedCategory }) => {
//   const { reviewlist, fetchReviewList } = useContext(StoreContext);
//   const [filteredReviews, setFilteredReviews] = useState([]);

//   useEffect(() => {
//     fetchReviewList();
//   }, []);

//   useEffect(() => {
//     if (!reviewlist) return; // Ensure reviewlist is available before filtering

//     const filtered = selectedCategory === "All" 
//       ? reviewlist 
//       : reviewlist.filter(item => item.productCategory === selectedCategory);

//     setFilteredReviews(filtered);
//   }, [selectedCategory, reviewlist]); // Re-run filtering when category or reviews change

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Know Your Product Reviews</h2>
//       <div className="food-display-list">
//         {filteredReviews.length > 0 ? (
//           filteredReviews.map((item, index) => (
//             <ReviewItems 
//               key={index} 
//               id={item._id} 
//               productName={item.productName}
//               productCategory={item.productCategory}
//               rating={item.rating}
//               reviewTitle={item.reviewTitle}
//               review={item.review}
//               userName={item.userName}
//               image={item.image}
//               date={item.date}
//             />
//           ))
//         ) : (
//           <p>No reviews available for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewDisplay;
