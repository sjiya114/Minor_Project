import axios from "axios";
import { createContext} from "react";
//import { food_list } from "../assets/assets";
import { useState,useEffect } from "react";

export const StoreContext = createContext(null)
// const url = 'http://localhost:5500'


const StoreContextProvider = (props) => {

   
    const url = "http://localhost:5500"
    const [reviewlist, setReviewList] = useState([]);


    const fetchReviewList = async () => {
        try{
        const response = await axios.get(url+"/api/review/list");
        // console.log(response.data.data);
        setReviewList(response.data.data)
        }
        catch(e)
        {
            console.log(e);
        }
    }
    // useEffect(()=>{
    // async function loadData() {
    //     await fetchReviewList()
    //   }
    //   loadData();
    // },[]);

    const contextValue ={
        fetchReviewList,
        reviewlist,
        url,
        
    }
  
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;