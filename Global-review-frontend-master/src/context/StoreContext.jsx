import axios from "axios";
import { createContext, useEffect } from "react";
//import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null)
const url = 'http://localhost:5500'


const StoreContextProvider = (props) => {

   
    const url = "http://localhost:5500"
    const [token, setToken] = useState("");
    const [reviewlist, setReviewList] = useState([]);
    const [username,setUsername]=useState("");
    const [selCategory,setSelCategory]=useState("All");


    const fetchReviewList = async () => {
        const response = await axios.get(url+"/api/review/list");
        console.log(response.data.data);
        setReviewList(response.data.data)
    }
    useEffect(()=>{
    async function loadData() {
        await fetchReviewList()
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));
            
        }
      }
      loadData();
    },[fetchReviewList]);

    const contextValue ={
        fetchReviewList,
        reviewlist,
        url,
        token,
        setToken,
        username,
        setUsername,
        selCategory,
        setSelCategory
    }
  
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;