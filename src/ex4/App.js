import React, { useState } from "react";
import {
  FormStyled,
  InputContainer,
  SubmitButton,
  Container,
  ErrorMessage,
  Title,
} from "./components/From/styledForm";

import OverLay from "./components/Model/OverLay";
import useInput from "./hooks/use-Input";

function App() {
  const {
    focusHandler: nameFocusHandler,
    blurHandler: nameBlurHandler,
    changeHandler: nameChangeHandler,
    hasError: nameHasError,
    inputIsValid: nameIsValid,
    stateInput: nameState,
    reset: resetName,
  } = useInput((nameState) => nameState.trim() !== "");
  const {
    focusHandler: emailFocusHandler,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
    hasError: emailHasError,
    inputIsValid: emailIsValid,
    stateInput: emailState,
    reset: resetemail,
  } = useInput(
    (emailState) => emailState.trim() !== "" && emailState.includes("@"),
  );
  const {
    focusHandler: ageFocusHandler,
    blurHandler: ageBlurHandler,
    changeHandler: ageChangeHandler,
    hasError: ageHasError,
    inputIsValid: ageIsValid,
    stateInput: ageState,
    reset: resetage,
  } = useInput((ageState) => ageState.trim() !== "" && Number(ageState) > 17);
  const {
    focusHandler: selectFocusHandler,
    blurHandler: selectBlurHandler,
    changeHandler: selectChangeHandler,
    hasError: selectHasError,
    inputIsValid: selectIsValid,
    stateInput: selectState,
    reset: resetselect,
  } = useInput(
    (selectState) => selectState.trim() !== "" && selectState !== "Choose",
  );
  const {
    focusHandler: messageFocusHandler,
    blurHandler: messageBlurHandler,
    changeHandler: messageChangeHandler,
    hasError: messageHasError,
    inputIsValid: messageIsValid,
    stateInput: messageState,
    reset: resetmessage,
  } = useInput((messageState) => messageState.trim() !== "");

  let formValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    ageIsValid &&
    selectIsValid &&
    messageIsValid
  ) {
    formValid = true;
  }
  const [activeOverLay, setActiveOverLay] = useState(false);
  function HandelSubmit(e) {
    e.preventDefault();
    resetName();
    resetemail();
    resetselect();
    resetage();
    resetmessage();
    setActiveOverLay(true);
  }

  return (
    <Container>
      <Title>Hurry For Hiring 💼</Title>
      {activeOverLay && (
        <OverLay
          switchModel={() => {
            console.log(activeOverLay);
            setActiveOverLay(false);
          }}
          isActive={activeOverLay}
        />
      )}
      <FormStyled onSubmit={HandelSubmit}>
        <InputContainer htmlFor="name" bg={!nameHasError && "whiteSmoke"}>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            id="name"
            value={nameState}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            onFocus={nameFocusHandler}
          />
          {nameHasError && <ErrorMessage>Your Name is Invalide</ErrorMessage>}
        </InputContainer>
        <InputContainer htmlFor="email" bg={!emailHasError && "whiteSmoke"}>
          <h3>Email</h3>
          <input
            type="email"
            name="email"
            id="email"
            value={emailState}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            onFocus={emailFocusHandler}
          />
          {emailHasError && <ErrorMessage>Your Email is Invalide</ErrorMessage>}
        </InputContainer>
        <InputContainer htmlFor="age" bg={!ageHasError && "whiteSmoke"}>
          <h3>Age</h3>
          <input
            type="number"
            step="1"
            min="15"
            max="100"
            name="age"
            id="age"
            value={ageState}
            onChange={ageChangeHandler}
            onBlur={ageBlurHandler}
            onFocus={ageFocusHandler}
          />
          {ageHasError && <ErrorMessage>Your Age is Invalide</ErrorMessage>}
        </InputContainer>
        <InputContainer htmlFor="stack" bg={!selectHasError && "whiteSmoke"}>
          <h3>Your Stack</h3>
          <select
            id="stack"
            value={selectState}
            onChange={selectChangeHandler}
            onBlur={selectBlurHandler}
            onFocus={selectFocusHandler}
          >
            <option value="Choose">Choose</option>
            <option value="MERN">MERN</option>
            <option value="MEAN">MEAN</option>
            <option value="MEVN">MEVN</option>
            <option value="Other">Other</option>
          </select>
          {selectHasError && (
            <ErrorMessage>Your Stack is Invalide</ErrorMessage>
          )}
        </InputContainer>
        <InputContainer htmlFor="message" bg={!messageHasError && "whiteSmoke"}>
          <h3>Message</h3>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            value={messageState}
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            onFocus={messageFocusHandler}
          ></textarea>
          {messageHasError && (
            <ErrorMessage>Your Message is Invalide</ErrorMessage>
          )}
        </InputContainer>
        <SubmitButton disabled={!formValid} valid={formValid} type="submit">
          Submit
        </SubmitButton>
      </FormStyled>
    </Container>
  );
}

export default App;
