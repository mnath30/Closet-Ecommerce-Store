import { Routes, Route } from "react-router-dom";
import {
  Home,
  Product,
  SingleProduct,
  Profile,
  Wishlist,
  Cart,
  Error,
  Login,
  Signup,
  Logout,
  Checkout,
  OrderSummary,
} from "../pages";
import Mockman from "mockman-js";
import { RequiresAuth } from "../helper";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="product/:productId" element={<SingleProduct />} />
      <Route
        path="profile"
        element={
          <RequiresAuth>
            <Profile />
          </RequiresAuth>
        }
      />
      <Route
        path="wishlist"
        element={
          <RequiresAuth>
            <Wishlist />
          </RequiresAuth>
        }
      />
      <Route
        path="cart"
        element={
          <RequiresAuth>
            <Cart />
          </RequiresAuth>
        }
      />
      <Route
        path="/checkout"
        element={
          <RequiresAuth>
            <Checkout />
          </RequiresAuth>
        }
      />
      <Route
        path="/summary"
        element={
          <RequiresAuth>
            <OrderSummary />
          </RequiresAuth>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
      <Route path="mockman" element={<Mockman />} />
    </Routes>
  );
};

export { Router };
