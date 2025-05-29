// import React from 'react'
// import { useState } from 'react';
// import { useContext,useEffect } from 'react';
// import './List.css'
// import { StoreContext } from '../../StoreContext/StoreContext';
// function List() {
//     const { reviewlist, fetchReviewList } = useContext(StoreContext);
//     const url="http://localhost:5500"
//     // const fetchList = async () => {
//     //   const response = await axios.get(`${url}/api/review/list`)
      
//     //   if (response.data.success) {
//     //     setList(response.data.data);
//     //     console.log(list);
//     //   }
//     //   else{
//     //     toast.error("Error")
//     //   }
//     // }

//     // useEffect(()=>{
//     //     fetchReviewList();
//     //     console.log(reviewlist);
//     //   },[])


//   return (
//     <div>
//        <div className='list add flex-col'>
//       <p>All Reviews List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//            <b>Image</b>
//            <b>ProductName</b>
//            <b>ProductCategory</b>
//            <b>Review</b>
//            <b>Rating</b>
//            <b>Action</b>
//         </div>
//         {reviewlist.map((item, index)=>{
//            return (
//             <div key={index} className='list-table-format'>
//                {/* <img src={`${url}/images/`+item.productName} alt="" /> */}
//                <p>{item.productCategory}</p>
//                <p>{item.review}</p>
//                <p>{item.rating}</p>
// {/* ye "_id" inbuilt aa jaata hai that's why isko use kiya jaata hai */}
//                {/* <p onClick={()=>removeFood(item._id)} className='cursor'>X</p> */}
//             </div>
//            )
//         })}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default List
import './List.css';
import React,{useContext,useEffect,useState} from 'react'
import { StoreContext } from '../../StoreContext/StoreContext.jsx';
import axios from 'axios'


const listDisplay = () => {

   const {reviewlist,fetchReviewList} = useContext(StoreContext);
   useEffect(() => {
    fetchReviewList(); // Fetch the review data when the component mounts
    console.log(reviewlist)
}, []); 

const [status,setStatus]=useState("Pending");
    const [id,setId]=useState('');
    const updateStatus=async(e)=>
    {
        e.preventDefault();
        console.log(e.target.value+" "+e.target.id);
        setStatus(e.target.value);
        setId(e.target.id);
        let res=axios.post("http://localhost:5500/api/review/update",{status:e.target.value,id:e.target.id});
        window.location.reload()
        if(res.status==200)
        {
          
          fetchReviewList();

            //     setReviewList(prevList =>
            //       prevList.map(review => 
            //         review._id === reviewId ? { ...review, status: newStatus} : review
            //        )
            //     );
            //     alert("Review status updated successfully!");
            //     fetchReviewList(); // Refresh the list to reflect changes
            //   } else {
            //     alert("Error updating status: " + data.message);
            //   }
            // } catch (error) {
            //   console.error("Error updating review:", error);
            // }
        }
    }



// const handleStatusChange = async (reviewId, newStatus) => {
//   try {
//     const response = await fetch(`http://localhost:5500/update-status/${reviewId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ status: newStatus }),
//     });

//     const data = await response.json();
//     if (response.ok) {

//       console.log("Status updated:", data)
//       fetchReviewList();

//       // setReviewList(prevList =>
//       //   prevList.map(review => 
//       //     review._id === reviewId ? { ...review, status: newStatus} : review
//       //    )
//       // );
//       // alert("Review status updated successfully!");
//       // fetchReviewList(); // Refresh the list to reflect changes
//     } else {
//       alert("Error updating status: " + data.message);
//     }
//   } catch (error) {
//     console.error("Error updating review:", error);
//   }
// };


 
  

  return (

//     <div className='list add flex-col'>
//     <p>All Foods List</p>
//   </div>










    // <div className='food-display' id='food-display'>
    //   <h2 style={{color:'#56374f',fontFamily:'cursive',textAlign:'center'}}>Know Your Product Reviews</h2>
    //    <div className="food-display-list">
    //     {reviewlist && reviewlist.length>0 && reviewlist.map((item, index)=>( 
    //          <div key={index}> 
    //              <h4> productName={item.productName}</h4>
    //              <h4> productCategory={ item.productCategory}</h4>
    //             <h4> rating={item.rating}</h4>
    //             <h4>  reviewTitle= {item.reviewTitle}</h4>
    //              <h4> review = { item.review}</h4>
    //              <h4> userName= {item.userName }</h4>
    //            </div> 
    //     ))}
    //      </div> 


    
      
    // </div> 
    <div className='list add flex-col'>
    <h1 style={{textAlign:'center',marginTop:2,marginBottom:2,paddingBottom:5}}>All Reviews List</h1>
    {/* <p>All Reviews List</p> */}
    <div className="list-table">
      <div className="list-table-format title">
          <b>Image</b>
         <b>Product Name</b>
         <b>Product Category</b>
         <b>Rating</b>
         <b>Review Title</b>
         <b>Review</b>
         <b>UserName</b>
        <b>Action</b>

      </div>
      {reviewlist.map((item, index)=>{
         return (
          <div key={index} className='list-table-format'>
            <img  src={`http://localhost:5500/uploads/${item.image}`} alt="" />
             <p>{item.productName}</p>
             <p>{item.productCategory}</p>
             <p>{item.rating}</p>
             <p>{item.reviewTitle}</p>
             <p>{item.review}</p>
             <p>{item.userName}</p>
             {/* <select name="approval" id="approval">
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejectd">Rejected</option>
             </select> */}

<select name="status" id={item._id} value={item.status} onChange={updateStatus}> 
   <option value="Approved">Approved</option> 
   <option value="Pending">Pending</option>  
    <option value="Rejected">Rejected</option> 
    </select>

                 {/* <select
                 name="approval"
                 id="approval"
                 value={item.status || "Pending"}
                 onChange={(e) => handleStatusChange(item._id, e.target.value)}
                >
                <option name = "Pending" value="Pending">Pending</option>
                <option name = "Approved" value="Approved">Approved</option>
                 <option name = "Rejected" value="Rejected">Rejected</option>
              </select> */}


             
          </div>
         )
      })}
    </div>
  </div>
  )
}

export default listDisplay;