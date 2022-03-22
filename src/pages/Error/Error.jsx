import './error.css'
import {errorimg} from "../../asset"

const Error=()=>{
    return(
        <>  
            <img className="error-image" src={errorimg} alt="page not found" />
            <h3>We couldn't find any matches</h3>
            <p>Please check the spelling or try finding something else</p>
            
        </>

    )
}

export {Error}