import "./filter.css";
import { useProducts } from "../../context";
import { brandings, rating, sortingCategory } from "../../helper";
import {
  FILTER_BY_PRICE,
  FILTER_BY_BRANDS,
  RATING,
  CLEAR_ALL,
} from "../../helper/constants";

const Filter = ({ filterStyle = "", clickHandler }) => {
  const { products, productsDispatch } = useProducts();

  return (
    <div className={`flex-column ${filterStyle}`} onClick={clickHandler}>
      <button
        className="btn-link padding-sm"
        onClick={() => productsDispatch({ type: CLEAR_ALL })}
      >
        Clear All Filters
      </button>
      <hr />
      <h3 className="padding-sm">Filters</h3>
      <h3 className="padding-sm">Price Range</h3>
      <label id="price-selector"></label>
      <input
        className="padding-sm"
        type="range"
        min="500"
        max="5000"
        step="500"
        value={products.pricerange}
        id="price-selector"
        onChange={(e) =>
          productsDispatch({ type: FILTER_BY_PRICE, payload: e.target.value })
        }
      />
      <p className="padding-sm">Price under: {products.pricerange}</p>

      <h3 className="padding-sm">Brands</h3>
      <div className="padding-sm">
        {brandings.map((element) => (
          <div key={element.id}>
            <input
              type="checkbox"
              id={element.id}
              name={element.brandname}
              checked={products.listofbrands.includes(element.brandname)}
              onClick={() =>
                productsDispatch({
                  type: FILTER_BY_BRANDS,
                  payload: element.brandname,
                })
              }
            />
            <label htmlFor={element.id}>{element.brandname}</label>
            <br />
          </div>
        ))}
      </div>

      <h3 className="padding-sm">Rating</h3>
      <div className="padding-sm">
        {rating.map((element) => (
          <div key={element.id}>
            <input
              type="radio"
              id={element.id}
              name="rating"
              value={element.id}
              onClick={() =>
                productsDispatch({ type: RATING, payload: element.id })
              }
              checked={products.rating === element.id}
            />
            <label htmlFor={element.id}>{element.ratinglabel}</label>
            <br />
          </div>
        ))}
      </div>

      <h3 className="padding-sm">Sort By</h3>
      <div className="padding-sm">
        {sortingCategory.map((element) => (
          <div key={element.id}>
            <input
              type="radio"
              id={element.id}
              name="sorting"
              value={element.id}
              onClick={() =>
                productsDispatch({ type: element.id, payload: element.id })
              }
              checked={products.sorting === element.id}
            />
            <label htmlFor={element.id}>{element.categoryname}</label>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Filter };
