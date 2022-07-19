import "./single-product.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProducts, useCartWishlist } from "../../context";
import { getSingleProductService } from "../../services/productService";
import { Loader } from "../../Components";
import { Link } from "react-router-dom";
import { SingleProductDetail } from "../../Components";

const SingleProduct = () => {
  const { productId } = useParams();
  const { products, productsDispatch } = useProducts();
  const { currentProductLoading, currentProduct, currentProductError } =
    products;
  const { source, information } = currentProduct;
  const { cartWishlist, cartWishlistDispatch } = useCartWishlist();
  const encodedToken = localStorage.getItem("encodedToken");
  let productInCart = false;
  let productInWishlist = false;

  if (encodedToken) {
    const { cart, wishlist } = cartWishlist;
    productInCart = cart.some((item) => item._id === productId);
    productInWishlist = wishlist.some((item) => item._id === productId);
  }

  useEffect(() => {
    if (
      currentProduct?._id !== productId ||
      Object.keys(currentProduct).length === 0
    ) {
      getSingleProductService(productsDispatch, productId);
    }
    // eslint-disable-next-line
  }, [productId, productsDispatch]);

  return (
    <>
      {currentProductLoading && (
        <div className="flex loader_container">
          <Loader />
        </div>
      )}
      {!currentProductLoading && !currentProductError && (
        <div className="singleproduct__container">
          <div className="singleproduct__image_container">
            <img
              src={source}
              alt={information}
              className="singleproduct__image responsive-img"
            />
          </div>
          <SingleProductDetail
            product={currentProduct}
            productInBag={productInCart}
            productInFav={productInWishlist}
            encodedToken={encodedToken}
            cartWishlistDispatch={cartWishlistDispatch}
          />
        </div>
      )}
      {!currentProductLoading && currentProductError && (
        <p className="flex loader_container">
          {currentProductError}. Go back to
          <Link to="/" className="link">
            Home
          </Link>
        </p>
      )}
    </>
  );
};

export { SingleProduct };
