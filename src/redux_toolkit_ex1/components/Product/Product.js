import React from "react";

import {
  IconProduct,
  ProductStyle,
  Action,
  AddItem,
  PriceItem,
} from "./styleProduct";
import { useCart } from "react-use-cart";
function Product({ item }) {
  const { price, name, imgUrl, id } = item;
  const { addItem, inCart, removeItem } = useCart();
  const isInCart = inCart(id);
  function ToggleItem() {
    if (isInCart) {
      removeItem(id);
    } else {
      addItem(item);
    }
  }
  return (
    <ProductStyle>
      <picture>
        <img src={imgUrl} alt={"product " + id} />
      </picture>
      <h2>{name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        quis,it amet consectetur...
      </p>
      <Action>
        <PriceItem incart={isInCart ? "true" : undefined}>
          Price:
          <span> {price}$</span>
        </PriceItem>
        <AddItem onClick={ToggleItem} incart={isInCart ? "true" : undefined}>
          {isInCart ? "in Cart" : "Add to Cart"}
        </AddItem>
      </Action>
      <IconProduct incart={isInCart ? "true" : undefined} />
    </ProductStyle>
  );
}

export default Product;
