import { ProductCard,Filter,Footer } from "../../Components";
import "./product.css"
import { useProducts } from "../../context/ProductContext";



const Product=()=>{
    const {data}=useProducts();
    console.log(data);
    return(
        <>
        {console.log(data)}
        <div className="product-grid padding-lg">
            <aside className="product-filter">
                <Filter/>
            </aside>
            {/* Product List */}
            <div className="main-product">
                {/* Heading */}
                <h3 className="txt-center txt-lg heading">Showing Products</h3>

                {/* Product Cards  */}
                <div className="flex padding-lg">
                   
                    {data.map(ele=><ProductCard key={ele.id} source={ele.source} information={ele.information} brand={ele.brand} itemname={ele.itemname} price={ele.price} rating={ele.rating} isAddedToCart={ele.isAddedToCart} isAddedToWishlist={ele.isAddedToWishlist} isOutOfStock={ele.isOutOfStock}/>)}
                </div>
            </div>
        </div>
        <Footer/>
        </>    
    ) 
}

export {Product}