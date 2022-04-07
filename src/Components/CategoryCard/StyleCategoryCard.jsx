import "./category-card.css";
import { useProducts } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const StyleCategoryCard = ({ source, information, caption }) => {
  const { productsDispatch } = useProducts();
  const navigate = useNavigate();
  const showFilteredCategory = (title) => {
    productsDispatch({
      type: "FILTER_BY_BRANDS",
      payload: title,
    });
    navigate("/product");
  };
  return (
    <div
      className="card square-card flex-column"
      onClick={() => showFilteredCategory(caption)}
    >
      <img
        className="responsive-img square-img"
        src={source}
        alt={information}
      />
      <h5 className="card-header">{caption}</h5>
    </div>
  );
};

export { StyleCategoryCard };
