import {createContext,useContext} from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const ProductContext=createContext(null);
const useProducts=()=>useContext(ProductContext);
const ProductProvider=({children})=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        (async ()=>{
            try {
                const responseData=await axios.get('/api/products');
                setData(responseData.data.products)
            }
            catch{
                console.log('There was some error in processing your request')
            }
        })() 
    },[])
    

    return(
        <ProductContext.Provider value={{data}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductProvider,useProducts}

