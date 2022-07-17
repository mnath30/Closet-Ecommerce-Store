import "./category-card.css";
import { useProducts } from "../../context";
import { useNavigate } from "react-router-dom";
import { FILTER_BY_GENDER } from "../../helper/constants";

const GenderCategoryCard = ({ source, information, caption, id }) => {
  const { productsDispatch } = useProducts();
  const navigate = useNavigate();
  const filterGender = (id) => {
    productsDispatch({
      type: FILTER_BY_GENDER,
      payload: id,
    });
    navigate("/product");
  };
  return (
    <div
      className="card card-horiz flex-column"
      onClick={() => filterGender(id)}
    >
      <div>
        <img className="responsive-img" src={source} alt={information} />
      </div>
      <div className="card-body">
        <h5 className="card-header txt-center">{caption}</h5>
      </div>
    </div>
  );
};

export { GenderCategoryCard };
