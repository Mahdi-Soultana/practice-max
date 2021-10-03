import React from "react";
import { useCart } from "react-use-cart";
import { CartContext } from "../../context/ActiveCartPorvider";
import { StyleCartIcon, CountingNumber, CartIconContainer } from "./styleCart";
function IconCart() {
  const { toggleState } = React.useContext(CartContext);
  const { totalUniqueItems, isEmpty } = useCart();
  return (
    <CartIconContainer
      onClick={toggleState}
      title="info Cart"
      isempty={isEmpty ? "true" : null}
      disabled={isEmpty && true}
    >
      <StyleCartIcon isempty={isEmpty ? "true" : null} />
      <CountingNumber isempty={isEmpty ? "true" : null}>
        {(!totalUniqueItems && "No Item in Cart ") || totalUniqueItems}
      </CountingNumber>
    </CartIconContainer>
  );
}

export default IconCart;
