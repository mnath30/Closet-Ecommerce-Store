import "./App.css";
import { Router } from "./router/Router";
import { Navbar } from "./Components";
import { useAddress, useAuth, useCartWishlist, useProducts } from "./context";
import { useEffect } from "react";
import {
  getAllProductService,
  getWishlistService,
  getCartService,
  getAddressService,
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
  const { addressDispatch } = useAddress();

  useEffect(() => {
    if (productData.length === 0) {
      getAllProductService(productsDispatch);
    }
  }, [productsDispatch, productData]);

  useEffect(() => {
    if (encodedToken) {
      getCartService(cartWishlistDispatch, encodedToken);
      getWishlistService(cartWishlistDispatch, encodedToken);
      getAddressService(addressDispatch, encodedToken);
    }
  }, [encodedToken, cartWishlistDispatch, addressDispatch]);

  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
