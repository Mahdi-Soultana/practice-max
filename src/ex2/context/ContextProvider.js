import React, { useReducer } from "react";

import CartContext from "./CartContext";
import { initReducer } from "./ReducerInit";
import reducer from "./reducerFN";

/// CtxProvider
function ContextProvider(props) {
  const addItem = (item) => {
    dispatch({ type: "ADD", item });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", id });
  };
  const UpdatedItem = (itemToUpdate) => {
    let cartUpdated = ctxCart.cart.map((item) => {
      if (item.id === itemToUpdate.id) {
        return {
          ...item,
          amount: Number(item.amount) + Number(itemToUpdate.amount),
        };
      }
      return item;
    });
    dispatch({ type: "UPDATE_CART", cartUpdated });
  };

  const [state, dispatch] = useReducer(reducer, initReducer);

  const ctxCart = {
    items: state.items,
    totalAmount: state.totalAmount,
    cart: state.cart,
    isOpen: state.isOpen,
    addItem,
    removeItem,
    UpdatedItem,
    switchIsOpen: () => dispatch({ type: "SWITCH_ISOPEN" }),
  };

  return (
    <CartContext.Provider value={ctxCart}>
      {props.children}
    </CartContext.Provider>
  );
}

export default ContextProvider;
