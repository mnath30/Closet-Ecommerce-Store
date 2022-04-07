import { createContext, useContext } from "react";
import { useState, useReducer, useEffect } from "react";
import { filterReducer } from "../reducer/filterReducer";
import { useFetch } from "../hooks/useFetch";
import {
  compose,
  sorting,
  filterByRating,
  filterByPrice,
  filterbrands,
  initialState,
  filterByGender,
} from "../helper";

const ProductContext = createContext(null);
const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const { data } = useFetch();
  const [productList, setProductList] = useState([]);
  const [products, productsDispatch] = useReducer(filterReducer, initialState);

  useEffect(() => {
    setProductList(data);
  }, [data]);

  const updatedProductList = compose(
    filterbrands,
    sorting,
    filterByRating,
    filterByPrice,
    filterByGender
  )(products, [...productList]);

  return (
    <ProductContext.Provider
      value={{ updatedProductList, products, productsDispatch }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProducts };
