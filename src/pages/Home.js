import React from "react";
import { useContext } from "react";
import { PRODUCT_CONTEXT } from "../context/ProductProvider";

const Home = () => {
  const { data } = useContext(PRODUCT_CONTEXT);
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      <h1>This is home page</h1>
    </div>
  );
};

export default Home;
