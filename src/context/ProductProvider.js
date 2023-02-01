import React from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  initialState,
  productReducer,
} from "../state/ProductState/ProductReducer";

export const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [data, setData] = useState();

  const [state, dispatch] = useReducer(productReducer, initialState);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  const value = {
    data,
  };
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export default ProductProvider;
