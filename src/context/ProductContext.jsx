import { createContext, useContext } from "react";
import { useReducer } from "react";
import { filterReducer } from "../reducer";
import { initialState } from "../helper";

const ProductContext = createContext(null);
const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [products, productsDispatch] = useReducer(filterReducer, initialState);

  return (
    <ProductContext.Provider value={{ products, productsDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, useProducts };
