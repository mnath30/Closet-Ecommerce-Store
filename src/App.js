import "./App.css";
import { Router } from "./router/Router";
import { Navbar } from "./Components";
import { useAuth, useCartWishlist, useProducts } from "./context";
import { useEffect } from "react";
import {
  getAllProductService,
  getWishlistService,
  getCartService,
} from "./services";

function App() {
  const {
    products: { productData },
    productsDispatch,
  } = useProducts();
  const {
    authState: { encodedToken },
  } = useAuth();
  const { cartWishlistDispatch } = useCartWishlist();

  useEffect(() => {
    if (productData.length === 0) {
      getAllProductService(productsDispatch);
    }
  }, [productsDispatch, productData]);

  useEffect(() => {
    if (encodedToken) {
      getCartService(cartWishlistDispatch, encodedToken);
      getWishlistService(cartWishlistDispatch, encodedToken);
    }
  }, [encodedToken, cartWishlistDispatch]);

  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
