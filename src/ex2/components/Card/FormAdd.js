import React, { useContext, useState } from "react";
import { Button } from "./../../../ex1/components/Form/form";
import { Actions } from "./styledCrd";
import CartContext from "./../../context/CartContext";

function FormAdd(props) {
  const [amount, setAmount] = useState(props.amount);
  const ctxCart = useContext(CartContext);
  function HandelSubmit(e) {
    e.preventDefault();
    let addedItem = ctxCart.cart.findIndex((item) => item.id === props.id);
    console.log(addedItem);
    if (addedItem < 0) {
      ctxCart.addItem({
        name: props.name,
        descrip: props.descrip,
        price: props.price,
        amount: amount,
        id: props.id,
        img: props.img,
      });
    } else {
      // console.log("itemAlredy In Cart");
      ctxCart.UpdatedItem({
        name: props.name,
        descrip: props.descrip,
        price: props.price,
        amount: amount,
        id: props.id,
        img: props.img,
      });
    }
  }

  return (
    <form onSubmit={HandelSubmit}>
      <Actions>
        <input
          type="number"
          name="amount"
          id="amount"
          step="1"
          min="1"
          max="5"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />

        <div>
          <Button type="submit" width="9rem">
            Add +
          </Button>
        </div>
      </Actions>
    </form>
  );
}

export default FormAdd;
