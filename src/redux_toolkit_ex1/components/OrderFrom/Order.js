import React from "react";
import { OrderStyle, Form, FormControl } from "./OrderStyle";
function Order() {
  return (
    <OrderStyle>
      <h1>Order Info</h1>
      <Form>
        <FormControl>
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" name="name" id="name" placeholder="name" />
          </label>
        </FormControl>
        <FormControl>
          <label htmlFor="email">
            <span>email</span>
            <input type="email" name="email" id="email" placeholder="email" />
          </label>
        </FormControl>
        <FormControl>
          <label htmlFor="phone">
            <span>Namphonee</span>
            <input type="tel" name="phone" id="phone" placeholder="phone" />
          </label>
        </FormControl>
        <FormControl></FormControl>
      </Form>
    </OrderStyle>
  );
}

export default Order;
