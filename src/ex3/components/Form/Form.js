import React, { useState } from "react";

import { FromStyled, Input, TextArea, Button } from "./styleForm";
function Form(props) {
  const init = { text: "", name: "", time: "" };
  const [state, setState] = useState(init);

  function handelInput(e) {
    setState((prevState) => {
      const propert = e.target.id;
      return { ...prevState, [propert]: e.target.value };
    });
  }
  return (
    <FromStyled
      onSubmit={(e) => {
        setState(init);
        props.HandelSubmit(e);
      }}
    >
      <label htmlFor="name">
        <span>Name</span>
        <Input
          type="text"
          value={state.name}
          name="name"
          placeholder="Name"
          id="name"
          onChange={(e) => handelInput(e)}
        />
      </label>
      <label htmlFor="text">
        <span>Text</span>
        <TextArea
          name="text"
          id="text"
          placeholder="Massage"
          cols="30"
          rows="10"
          value={state.text}
          onChange={(e) => handelInput(e)}
        ></TextArea>
      </label>
      <label htmlFor="time">
        <span>Time</span>
        <Input
          type="date"
          name="time"
          id="time"
          value={state.time}
          onChange={(e) => handelInput(e)}
        />
      </label>
      <Button type="submit">Add Comment</Button>
    </FromStyled>
  );
}

export default Form;
