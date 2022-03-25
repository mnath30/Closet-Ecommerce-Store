import "./banner-image.css" 
import {img01} from '../../asset';
import { Link } from "react-router-dom";

const BannerImage=()=>{
    return(
            <div className="main-image">
                <img className="responsive-img" src={img01} alt="closet-of-clothes"/>
                <Link to="/product">
                    <div className="main-image-text">
                        <p>Best Deals
                        <br/>
                        Shop Now</p>
                    </div>
                </Link>
            </div>
    )
}

export {BannerImage}