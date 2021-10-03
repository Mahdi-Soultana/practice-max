import React from "react";
import { CartStyle, OverLayCart } from "./styleCart";
import ItemCart from "./ItemCart";
import { CartContext } from "../../context/ActiveCartPorvider";
function Cart() {
  const { toggleState } = React.useContext(CartContext);
  return (
    <>
      <OverLayCart onClick={toggleState} />
      <CartStyle>
        <ul>
          <li>
            <ItemCart />
          </li>
          <li>
            <ItemCart />
          </li>
        </ul>
        <div>
          <h1>Total Price $:</h1>
          <span>100.99 $</span>
        </div>
      </CartStyle>
      ;
    </>
  );
}

export default Cart;
