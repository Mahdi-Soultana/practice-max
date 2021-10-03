import React from "react";
import AppRedux from "./AppRedux";
import "./style.css";
import { CartProvider } from "react-use-cart";

function ReduxToolKit() {
  return (
    <CartProvider>
      <AppRedux />
    </CartProvider>
  );
}

export default ReduxToolKit;
