import { ProductCard, Filter, Footer, ProductNotFound } from "../../Components";
import "./product.css";
import { useProducts } from "../../context";
import {
  compose,
  sorting,
  filterByRating,
  filterByPrice,
  filterbrands,
  filterByGender,
} from "../../helper";
import { useMobileFilter } from "../../hooks/useMobileFilter";

const Product = () => {
  const { products } = useProducts();
  const { gender, productData } = products;
  const { displayFilter, closeFilter, openFilter } = useMobileFilter();
  const updatedProductList = compose(
    filterbrands,
    sorting,
    filterByRating,
    filterByPrice,
    filterByGender
  )(products, [...productData]);

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

          {gender !== null && (
            <h3 className="txt-center txt-lg heading">
              Category: {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </h3>
          )}

          <div className="flex padding-lg">
            {updatedProductList.length === 0 ? (
              <ProductNotFound />
            ) : (
              updatedProductList?.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))
            )}
          </div>
        </div>
      </div>
      <button className="mobilefilter-btn" onClick={openFilter}>
        <i className="fas fa-filter"></i>
      </button>
      <Footer />
      {displayFilter && (
        <div className="mobile-overlay" onClick={closeFilter}>
          <Filter
            filterStyle="mobile-filter"
            clickHandler={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export { Product };
