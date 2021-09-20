import React from "react";
import { Card, Price } from "./styledCrd";
import imgSrc from "../header/lily-banse--YHSwy6uqvk-unsplash.jpg";

import FormAdd from "./FormAdd";
function CardComponent(props) {
  const convertPrice = (price) => {
    const numPri = Number(price).toFixed(2);
    return numPri;
  };

  return (
    <Card>
      <figure>
        <img src={props.img || imgSrc} alt="food" />
      </figure>
      <Price>
        <h1>{props.name || "Hell Foody"}</h1>
        <p>
          {props.descrip ||
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          reiciendis recusandae amet, tenetur aliquam similique quam? Aperiam
          praesentium tempora illo modi vitae. Quam perspiciatis saepe nostrum
          incidunt quos quisquam in!"`}
        </p>
        <h1>{`${convertPrice(props.price)}$` || "10.99$"}</h1>
      </Price>
      <FormAdd {...props} />
    </Card>
  );
}

export default CardComponent;
