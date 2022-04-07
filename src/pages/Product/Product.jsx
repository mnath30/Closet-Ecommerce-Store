import { ProductCard, Filter, Footer, ProductNotFound } from "../../Components";
import "./product.css";
import { useProducts } from "../../context/ProductContext";

const Product = () => {
  const { products, updatedProductList } = useProducts();
  return (
    <>
      <div className="product-grid padding-lg">
        <aside className="product-filter">
          <Filter />
        </aside>
        <div className="main-product-page">
          <h3 className="txt-center txt-lg heading">
            Showing Products : {updatedProductList.length}
          </h3>

          {products.gender !== null && (
            <h3 className="txt-center txt-lg heading">
              Category:{" "}
              {products.gender.charAt(0).toUpperCase() +
                products.gender.slice(1)}
            </h3>
          )}

          <div className="flex padding-lg">
            {updatedProductList.length === 0 ? (
              <ProductNotFound />
            ) : (
              updatedProductList?.map((ele) => (
                <ProductCard key={ele._id} product={ele} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export { Product };
