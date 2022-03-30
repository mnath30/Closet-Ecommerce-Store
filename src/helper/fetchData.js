import axios from "axios";

const fetchData=async( dispatch) =>{
    try {
        const response= await axios.get('/api/products')
        if(response.status===200){
            dispatch({type:"GET_PRODUCTS",payload:response.data.products})
        } 
    }
    catch(error){
        console.log("There was some error in processing your request",error)
    }
}

export {fetchData}