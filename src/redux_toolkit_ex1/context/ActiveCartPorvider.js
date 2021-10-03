import React from "react";

export const CartContext = React.createContext({
  isActive: false,
  toggle: () => {},
});

function ActiveCartPorvider(props) {
  const [state, setState] = React.useState(false);
  function toggleState() {
    setState((prevState) => !prevState);
  }
  const value = {
    state,
    toggleState,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
}

export default ActiveCartPorvider;
