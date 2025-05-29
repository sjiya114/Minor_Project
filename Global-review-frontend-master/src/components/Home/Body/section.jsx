// import React, { useContext,useState } from "react";
// import "./section.css";

// import image from "../../../assets/bg.jpg"
// import cars from "../../../assets/cars.jpg"
// import tyres from "../../../assets/tyres.jpg"
// import washingmachine from "../../../assets/washingmachine.jpg"
// import stroller from "../../../assets/st.jpg"
// import dietproducts from "../../../assets/gym.jpg"
// import vacuumcleaner from "../../../assets/vc.jpg"
// import homebuilder from "../../../assets/homebuilders.jpg"

// import { toast } from "react-toastify";

// import cm from "../../../assets/coffeemachine.jpeg"
// import { StoreContext } from "../../../context/StoreContext";
// import { Link, useNavigate } from "react-router-dom";


// const section = () => {
//     const {reviewlist, token}=useContext(StoreContext);
//     let nav=useNavigate();
//     let arr;
//     const [results,setResults]=useState([]);
//      const [search,setSearch]=useState('');
//      const latestone=reviewlist.filter((element,idx)=>
//     {
//         return element.status==="Approved";
//     })
//      const onChangeSubmit=(e)=>
//         {
//             let newVal=e.target.value;
//             setSearch(newVal);
//            arr= latestone.filter((element,idx)=>{
//             return (element.productName).includes(newVal);
//         });
//            setResults(arr);
//            console.log(results);
           
//         }
//          const handleClick=(e)=>
//          {
//          e.preventDefault();
//          console.log(results);
//          nav('/searchresults',{state:{searchresults:results}});
//          };
//    return (
// <>
// <section className="all">
// <section className="hero" style={{ backgroundImage: `url(${image})` }}>
//         <h1>Know better, choose better.</h1>
//         <p>Reviews by people like you.</p>
//         <div className="search-bar">
//             <input type="text" onChange={onChangeSubmit} placeholder="What are you looking for?" />
//             <button onClick={handleClick}>Search</button>
//             <div style={{borderRadius:'10px', marginTop:40 ,textAlign:'left',width:'70%',paddingLeft:10, maxWidth:'600px',position:'absolute',color:'black', background:' linear-gradient(135deg,#0056b3 ,#003366 )',textDecoration:'none',listStyleType:'none'}}>
//             {results.length>=1 && results.map((element,index)=>(
//                  <li style={{paddingTop:2}}><a href="/category" style={{textDecoration:'none',color:'white'}}>{index<10 &&  element.productName}</a></li>
//                  ))}
//              </div>
//         </div>
//     </section>

//     <div className="box"></div>











// <div className="box"></div>



//     <div className="box"></div>
//      <section className="reviews-section">
//         <h2 style={{textAlign:"center",paddingBottom:15}} >Featured Reviews</h2>
//         <p>Browse some of our latest reviews</p>

//         <div className="review-grid">
       
//          {latestone.toReversed().map((element,index)=>(
//             <>
//            {index<12  && element.status==="Approved" && <div className="review-card">
//                 <h3>{element.productName}</h3>
//                 <div className="reviewer-info">
//                     <img src={`http://localhost:5500/uploads/${element.image}`} style={{   width: 160,
//     height: 160 , borderRadius: '10px'}} alt="User Image"/>
//                     <div>
//                         <strong>{element.reviewTitle}</strong> <span>{element.userName}</span>
//                         <div className="stars">{element.rating}★</div>
//                         <span className="time">{new Date(element.date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</span>
//                     </div> 
//                 </div>
//                 <p>{element.review}</p>
//             </div> 
//  } </>
//          ))}
         

        
//         </div>

//     </section> 





















    
//     <section className="categories-section" >
//         <p>For more reviews browse following categories</p>
//         <h2 style={{textAlign:"center",paddingBottom:15}} >Categories</h2>
//         <p style={{color:'black'}}>Browse our most popular categories</p>

//         <div className="category-grid" >
//            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${cars})`,opacity:0.75}}>
//                 <h3>Cars</h3>
//                 <p>29,340 reviews</p>
//             </div></a>
//            <a href="/category"><div className="category-item" style={{backgroundImage:`url(${cm})`,opacity:0.75}}>
//                 <h3>Coffee Machines</h3>
//                 <p>17,010 reviews</p>
//             </div></a>
//            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${dietproducts})`,opacity:0.75}} >
//                 <h3>Diet & Weight Loss Products</h3>
//                 <p>9,002 reviews</p>
//             </div></a>
//            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${homebuilder})`,opacity:0.75}}>
//                 <h3>Home Builders</h3>
//                 <p>88,862 reviews</p>
//             </div></a>
//            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${stroller})`,opacity:0.75}} >
//                 <h3>Prams & Strollers</h3>
//                 <p>31,414 reviews</p>
//             </div></a>
//            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${tyres})`,opacity:0.75}}  >
//                 <h3>Tyres</h3>
//                 <p>8,216 reviews</p>
//             </div></a>
//            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${vacuumcleaner})`,opacity:0.75}} >
//                 <h3>Vacuum Cleaners</h3>
//                 <p>36,036 reviews</p>
//             </div></a>
//            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${washingmachine})`,opacity:0.75}}>
//                 <h3>Washing Machines</h3>
//                 <p>24,870 reviews</p>
//             </div></a>
//         </div>
//     </section>
//     </section>
//  <footer>
//     <div className="footer-bottom">
//         <p>© 2025{new Date().getFullYear} GlobalReview.com.Pty. Ltd. All Rights Reserved.</p>
//         <p>General disclaimer: All third-party trademarks, images, and copyrights on this page are used for the purpose of comparative advertising, criticism, or review. 
//             This is a public forum presenting user opinions on selected products and businesses, and as such, the views expressed do not reflect the opinion of ProductReview.com.au. 
//             Further details in the <a href="#">disclaimer</a>.
//         </p>
//     </div>
// </footer>
// </>
//    );
// };

// export default section;















///nNEEEEWWWW







import React, { useContext, useState } from "react";
import "./section.css";
import image from "../../../assets/bg.jpg";
import cars from "../../../assets/cars.jpg";
import tyres from "../../../assets/tyres.jpg";
import washingmachine from "../../../assets/washingmachine.jpg";
import stroller from "../../../assets/st.jpg";
import dietproducts from "../../../assets/gym.jpg";
import vacuumcleaner from "../../../assets/vc.jpg";
import homebuilder from "../../../assets/homebuilders.jpg";
import cm from "../../../assets/coffeemachine.jpeg";
import { StoreContext } from "../../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Section = () => {
  const { reviewlist } = useContext(StoreContext);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const nav = useNavigate();

  const latestone = reviewlist.filter(element => element.status === "Approved");

  const onChangeSubmit = (e) => {
    const newVal = e.target.value;
    setSearch(newVal);
    const arr = latestone.filter(element => (element.productName).includes(newVal));
    setResults(arr);
  };

  const handleClick = (e) => {
    e.preventDefault();
    nav('/searchresults', { state: { searchresults: results } });
  };

  // Group into slides of 3 reviews
  const groupedReviews = [];
  for (let i = 0; i < latestone.length; i += 3) {
    const chunk = latestone.toReversed().slice(i, i + 3).filter(r => r.status === "Approved");
    if (groupedReviews.length < 4) groupedReviews.push(chunk); // max 12 items (4 slides)
  }

  return (
    <>
      <section className="all">
        <section className="hero" style={{ backgroundImage: `url(${image})` }}>
          <h1>Know better, choose better.</h1>
          <p>Reviews by people like you.</p>
          <div className="search-bar">
            <input type="text" onChange={onChangeSubmit} placeholder="What are you looking for?" />
            <button onClick={handleClick}>Search</button>
            <div className="suggestions">
              {results.length >= 1 && results.map((element, index) => (
                <li key={index}><a href="/category">{index < 10 && element.productName}</a></li>
              ))}
            </div>
          </div>
        </section>

        <div className="box"></div>

        {/* Featured Reviews Carousel */}
        <section className="reviews-section">
          <h2 style={{ textAlign: "center", paddingBottom: 15 }}>Featured Reviews</h2>
         <p style={{margin:0}}>Browse some of our latest reviews</p> 

          <div id="carouselReviews" className="carousel slide"   data-bs-ride="carousel"
  data-bs-interval="2000">
            <div className="carousel-inner">
              {groupedReviews.map((group, i) => (
                <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                  <div className="review-grid1">
                    {group.map((element, index) => (
                      <div className="review-card1" key={index}>
                        <h3 style={{fontSize:25,fontWeight:"bold",paddingBottom:6}}>{element.productName}</h3>
                        <div className="reviewer-info1">
                          <img src={`http://localhost:5500/uploads/${element.image}`} alt="User" />
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
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselReviews" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselReviews" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </section>

        
        <section className="categories-section">
        <p style={{color:'black'}}>For more reviews browse following categories</p>
        <h2 style={{textAlign:"center",paddingBottom:15, margin:0}} >Categories</h2>
        <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2);',
    color:'black' }}>Browse our most popular categories</p>

         <div className="category-grid" >
            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${cars})`,opacity:0.75}}>
                 <h3>Cars</h3>
                 {/* <p>29,340 reviews</p> */}
             </div></a>
            <a href="/category"><div className="category-item" style={{backgroundImage:`url(${cm})`,opacity:0.75}}>
                 <h3>Coffee Machines</h3>
                 {/* <p>17,010 reviews</p> */}
             </div></a>
            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${dietproducts})`,opacity:0.75}} >
                 <h3>Diet & Weight Loss Products</h3>
                 {/* <p>9,002 reviews</p> */}
             </div></a>
            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${homebuilder})`,opacity:0.75}}>
                 <h3>Home Builders</h3>
                 {/* <p>88,862 reviews</p> */}
             </div></a>
            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${stroller})`,opacity:0.75}} >
                 <h3>Prams & Strollers</h3>
                 {/* <p>31,414 reviews</p> */}
             </div></a>
            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${tyres})`,opacity:0.75}}  >
                 <h3>Tyres</h3>
                 {/* <p>8,216 reviews</p> */}
             </div></a>
            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${vacuumcleaner})`,opacity:0.75}} >
                 <h3>Vacuum Cleaners</h3>
                 {/* <p>36,036 reviews</p> */}
             </div></a>
            <a href="/category"><div className="category-item" style={{ backgroundImage: `url(${washingmachine})`,opacity:0.75}}>
                 <h3>Washing Machines</h3>
                 {/* <p>24,870 reviews</p> */}
             </div></a>
         </div>
        </section>
      </section>

      {/* <footer>
        <div className="footer-bottom">
          <p>© 2025{new Date().getFullYear} GlobalReview.com.Pty. Ltd. All Rights Reserved.</p>
          <p>General disclaimer...</p>
        </div>
      </footer> */}
  <footer>
     <div className="footer-bottom">
         <p>© 2025{new Date().getFullYear} GlobalReview.com.Pty. Ltd. All Rights Reserved.</p>
        <p>General disclaimer: All third-party trademarks, images, and copyrights on this page are used for the purpose of comparative advertising, criticism, or review. 
             This is a public forum presenting user opinions on selected products and businesses, and as such, the views expressed do not reflect the opinion of ProductReview.com.au. 
             Further details in the <a href="#">disclaimer</a>.
         </p>
     </div>
 </footer>

    </>
  );
};

export default Section;
