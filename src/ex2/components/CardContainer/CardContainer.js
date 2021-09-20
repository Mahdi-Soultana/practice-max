import React, { useContext } from "react";
import Card from "./../Card/Card";
import { Wrapper, CardContainer as CardContainerStyled } from "../UI/Warpper";
import CartContext from "./../../context/CartContext";
function CardContainer() {
  const ctxCart = useContext(CartContext);
  return (
    <Wrapper>
      <CardContainerStyled>
        {ctxCart.items.length === 0 && (
          <h1>Opppsss No Product On THE STORE !</h1>
        )}
        {ctxCart.items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </CardContainerStyled>
    </Wrapper>
  );
}

export default CardContainer;
