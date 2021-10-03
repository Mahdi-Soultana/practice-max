import React from "react";
// import useFetch from "../../hooks/useFetch";
import Product from "../Product/Product";
import dataJSON from "../../DUMMY_DATA.json";

function Products() {
  console.log(dataJSON);
  const { Products } = dataJSON;
  // if (isLoading) {
  //   content = <h1>Loading ....</h1>;
  // }
  // if (isError) {
  //   content = <h1>Opsss You have an Error please Try Again !!</h1>;
  // }

  return Products.map((item) => <Product key={item.id} item={item} />);
}

export default Products;
