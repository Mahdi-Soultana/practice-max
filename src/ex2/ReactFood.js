import React from "react";
import App from "./App";
import CartContexProvider from "./context/ContextProvider";
function ReactFood(props) {
  return (
    <CartContexProvider>
      <App />
    </CartContexProvider>
  );
}

export default ReactFood;
