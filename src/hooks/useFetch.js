import axios from "axios"
import { useState,useEffect } from "react";

const useFetch=()=>{
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        (   
            async()=>{
                
                try{
                    const response=await axios.get('/api/products');
                    setData(response.data.products)
                }
                catch(error){
                    console.log("There was some error in processing your request",error)
                }
            }
        )()
    },[])

    return {data}
}

export {useFetch}