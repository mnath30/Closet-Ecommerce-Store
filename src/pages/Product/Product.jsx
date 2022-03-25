import { ProductCard,Filter,Footer } from "../../Components";
import "./product.css"
import { useProducts } from "../../context/ProductContext";

const Product=()=>{
    const {data}=useProducts();
    return(
        <>
        <div className="product-grid padding-lg">
            <aside className="product-filter">
                <Filter/>
            </aside>
            <div className="main-product">
                <h3 className="txt-center txt-lg heading">Showing Products</h3>
                <div className="flex padding-lg">   
                    {data.map(ele=><ProductCard key={ele.id} product={ele}/>)}
                </div>
            </div>
        </div>
        <Footer/>
        </>    
    ) 
}

export {Product}