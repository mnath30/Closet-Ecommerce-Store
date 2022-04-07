import "./filter.css";
import { useProducts } from "../../context/ProductContext";

const Filter = () => {
  const brandings = [
    { id: "levis", brandname: "Levis" },
    { id: "dress_berry", brandname: "Dress Berry" },
    { id: "lee_Cooper", brandname: "Lee Cooper" },
    { id: "lee", brandname: "Lee" },
    { id: "raymonds", brandname: "Raymonds" },
    { id: "jinny_and_jhonny", brandname: "Jinny & Jhonny" },
    { id: "only", brandname: "Only" },
    { id: "woodland", brandname: "Woodland" },
    { id: "reebok", brandname: "Reebok" },
  ];

  const rating = [
    { id: "4_STARS_AND_ABOVE", ratinglabel: "4 stars and above" },
    { id: "3_STARS_AND_ABOVE", ratinglabel: "3 stars and above" },
    { id: "2_STARS_AND_ABOVE", ratinglabel: "2 stars and above" },
    { id: "1_STAR_AND_ABOVE", ratinglabel: "1 stars and above" },
  ];

  const sortingCategory = [
    { id: "PRICE_HIGH_TO_LOW", categoryname: "Price - High to Low" },
    { id: "PRICE_LOW_TO_HIGH", categoryname: "Price - Low to High" },
  ];

  const { products, productsDispatch } = useProducts();

  return (
    <div className="flex-column">
      <button
        className="btn-link padding-sm"
        onClick={() => productsDispatch({ type: "CLEAR_ALL" })}
      >
        Clear All Filters
      </button>
      <hr />

      <h3 className="padding-sm">Filters</h3>

      <h3 className="padding-sm">Price Range</h3>
      <input
        className="padding-sm"
        type="range"
        min="500"
        max="5000"
        step="500"
        value={products.pricerange}
        onChange={(e) =>
          productsDispatch({ type: "FILTER_BY_PRICE", payload: e.target.value })
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
                  type: "FILTER_BY_BRANDS",
                  payload: element.brandname,
                })
              }
            />
            <label htmlFor={element.brandname}>{element.brandname}</label>
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
                productsDispatch({ type: "RATING", payload: element.id })
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
