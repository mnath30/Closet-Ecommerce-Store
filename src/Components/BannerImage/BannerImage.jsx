import "./banner-image.css" 
import {img01} from '../../asset';

const BannerImage=()=>{
    return(
        <>
            <div className="main-image">
                <img className="responsive-img" src={img01} alt="closet-of-clothes"/>
                <a href="productpage.html">
                    <div className="main-image-text">
                        <p>Best Deals
                        <br/>
                        Shop Now</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export {BannerImage}