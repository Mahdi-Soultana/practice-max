import React, { useContext } from "react";
import styled from "styled-components";
import cartContext from "../../context/CartContext";

const Cart = styled.div`
  cursor: pointer;
  background-color: chocolate;
  padding: 0 2rem;
  border-radius: 5px;
  display: flex;
  /* flex-basis: 15%; */
  justify-content: space-between;
  font-size: 2rem;
  color: white;
  align-items: center;
  position: relative;
  &:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
  }
  span:last-child {
    margin-left: 1rem;
  }
  .numberCart {
    position: absolute;
    top: -6px;
    left: -26px;
    line-height: 1;
    padding: 0.2rem 0.6rem;
    background-color: coral;
    border-radius: 3px;
  }
`;
function CartComponent() {
  const ctxCart = useContext(cartContext);
  const totalItems = ctxCart.cart.reduce((acc, item) => {
    let totalAmountperItem = +item.amount + acc;
    return totalAmountperItem;
  }, 0);
  return (
    <Cart
      onClick={() => {
        ctxCart.switchIsOpen();
      }}
    >
      <span>Your Cart</span>
      <span className="numberCart">{totalItems}</span>
    </Cart>
  );
}

export default CartComponent;
