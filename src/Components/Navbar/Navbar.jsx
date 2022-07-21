import logo from "../../asset/_Logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useProducts, useCartWishlist } from "../../context";
import { FILTER_BY_GENDER, CLEAR_ALL, SEARCH } from "../../helper/constants";
import { useState } from "react";

const Navbar = () => {
  const { productsDispatch } = useProducts();
  const { cartWishlist } = useCartWishlist();
  const { wishlist, cart } = cartWishlist;
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("encodedToken");
  const userName = localStorage.getItem("username");
  const [searchText, setSearchText] = useState("");

  const filterGender = (id) => {
    productsDispatch({
      type: FILTER_BY_GENDER,
      payload: id,
    });
    navigate("/product");
  };

  return (
    <header>
      <nav className="navigation">
        <div className="nav-brand-logo">
          <NavLink to="/" onClick={() => productsDispatch({ type: CLEAR_ALL })}>
            <img className="nav-img" src={logo} alt="website logo" />
          </NavLink>
        </div>
        <div className="nav-main-options">
          <ul className="nav-ul">
            <li
              className="nav-li"
              onClick={() => {
                productsDispatch({ type: CLEAR_ALL });
                filterGender("men");
              }}
            >
              <NavLink
                className={(navData) => (navData.isActive ? "nav-active" : "")}
                to="/product"
              >
                MEN
              </NavLink>
            </li>
            <li
              className="nav-li"
              onClick={() => {
                productsDispatch({ type: CLEAR_ALL });
                filterGender("women");
              }}
            >
              <NavLink
                to="/product"
                className={(navData) => (navData.isActive ? "nav-active" : "")}
              >
                WOMEN
              </NavLink>
            </li>
            <li
              className="nav-li"
              onClick={() => {
                productsDispatch({ type: CLEAR_ALL });
                filterGender("children");
              }}
            >
              <NavLink
                to="/product"
                className={(navData) => (navData.isActive ? "nav-active" : "")}
              >
                KIDS
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-search">
          <input
            className="nav-search-input"
            type="text"
            placeholder="Search for products and brands"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="nav-search-btn"
            onClick={() => {
              productsDispatch({
                type: SEARCH,
                payload: searchText,
              });
              setSearchText("");
              navigate("/product");
            }}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="nav-sub-options">
          <ul className="nav-ul">
            <li
              className="nav-li"
              onClick={() => productsDispatch({ type: CLEAR_ALL })}
            >
              <NavLink
                to="/profile"
                className={(navData) => (navData.isActive ? "nav-active" : "")}
              >
                <i className="fas fa-user"></i>
              </NavLink>
            </li>
            <li
              className="nav-li"
              onClick={() => productsDispatch({ type: CLEAR_ALL })}
            >
              <NavLink
                to="/wishlist"
                className={(navData) => (navData.isActive ? "nav-active" : "")}
              >
                <i className="far fa-heart"></i>
                {encodedToken && userName && (
                  <span className="navbar-badge">{wishlist.length}</span>
                )}
              </NavLink>
            </li>
            <li
              className="nav-li"
              onClick={() => productsDispatch({ type: CLEAR_ALL })}
            >
              <NavLink
                to="/cart"
                className={(navData) => (navData.isActive ? "nav-active" : "")}
              >
                <i className="fas fa-shopping-cart"></i>
                {encodedToken && userName && (
                  <span className="navbar-badge">{cart.length}</span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export { Navbar };
