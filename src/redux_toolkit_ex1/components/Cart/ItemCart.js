import React from "react";
import { Item, Count, PriceItem, Actions } from "./styleCart";

function ItemCart() {
  return (
    <Item>
      <h1>Name Here</h1>
      <Count> X 2</Count>
      <Actions>
        <button>+</button>
        <button>-</button>
      </Actions>
      <PriceItem>230$</PriceItem>
    </Item>
  );
}

export default ItemCart;
