import { BannerImage,StyleCategoryCard,GenderCategoryCard,Footer } from "../Components";
import {img04,img05,img06,img11,img12,img13,img14,img15,img16,img17,img18} from '../asset';
import '../style/style.css'

const Home=()=>{
    return(
        <>       
        <BannerImage/>
        <h4 className="heading-h4 padding-lg">Your favourite styles</h4>
        <div className="category-section flex padding-lg">
            <GenderCategoryCard source={img05} information="image of man" caption="Men"/>
            <GenderCategoryCard source={img04} information="image of woman" caption="Women"/>
            <GenderCategoryCard source={img06} information="image of children" caption="Kids"/>
        </div>  

        <h4 className="heading-h4">Shop by categories</h4>
        <div className="style-section flex padding-lg">  
        <StyleCategoryCard source={img11} information="woman in dress" caption="Dresses"/>
        <StyleCategoryCard source={img12} information="woman in sweater" caption="Sweaters"/>
        <StyleCategoryCard source={img13} information="woman in top" caption="Tops"/>
        <StyleCategoryCard source={img14} information="woman in jacket" caption="Over Coats"/>
        </div>

        <h4 className="heading-h4">Shop by categories</h4>
        <div className="style-section flex padding-lg">
        <StyleCategoryCard source={img15} information="man wearing jeans" caption="Jeans"/>
        <StyleCategoryCard source={img16} information="man wearing shirt" caption="Shirts"/>
        <StyleCategoryCard source={img17} information="man wearing jacket" caption="Jackets"/>
        <StyleCategoryCard source={img18} information="man wearing hoodie" caption="Hoodies"/>
        </div>

        <Footer/>

        </>
    )
}

export {Home}