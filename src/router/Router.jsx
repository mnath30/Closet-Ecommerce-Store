import { Routes, Route } from "react-router-dom";
import {
  Home,
  Product,
  Profile,
  Wishlist,
  Cart,
  Error,
  Login,
  Signup,
  Logout,
} from "../pages";
import Mockman from "mockman-js";
import { RequiresAuth } from "../helper";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="product" element={<Product />} />
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
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="logout"
        element={
          <RequiresAuth>
            <Logout />
          </RequiresAuth>
        }
      />
      <Route path="*" element={<Error />} />
      <Route path="mockman" element={<Mockman />} />
    </Routes>
  );
};

export { Router };
