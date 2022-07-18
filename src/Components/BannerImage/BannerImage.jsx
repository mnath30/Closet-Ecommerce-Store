import "./banner-image.css";
import { img01 } from "../../asset";
import { Link } from "react-router-dom";
import { CLEAR_ALL } from "../../helper/constants";
import { useProducts } from "../../context";

const BannerImage = () => {
  const { productsDispatch } = useProducts();

  return (
    <div className="main-image">
      <img className="responsive-img" src={img01} alt="closet-of-clothes" />
      <Link to="/product" onClick={() => productsDispatch({ type: CLEAR_ALL })}>
        <div className="main-image-text">
          <p>
            Best Deals
            <br />
            Shop Now
          </p>
        </div>
      </Link>
    </div>
  );
};

export { BannerImage };
