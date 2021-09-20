import styled from "styled-components";
import React from "react";
import ReactDOM from "react-dom";
import { SubmitButton } from "../From/styledForm";
const OverLayStyled = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
const FillStyled = styled.div`
  background: rgba(250, 250, 250, 1);
  position: fixed;
  width: 85vw;
  height: 65vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  @media (min-width: 700px) {
    width: 50vw;
    height: 45vh;
  }
  h1 {
    margin-top: auto;
  }
  p {
    font-size: 2rem;
    font-style: italic;
  }
  cite {
    align-self: flex-end;
    font-weight: bold;
  }
  & > * {
    margin: 1rem;
  }
`;
const SubmitButtonModel = styled(SubmitButton)`
  /* margin: 0 auto; */
  align-self: flex-end;
  justify-self: flex-end;
  margin-top: auto;
`;
function OverLay(props) {
  return (
    <>
      {props.isActive &&
        ReactDOM.createPortal(
          <OverLayStyled onClick={props.switchModel} />,
          document.getElementById("backdrop"),
        )}
      {props.isActive &&
        ReactDOM.createPortal(
          <FillStyled>
            <h1>
              Congart 🎉 ! your info was sent sucessfully <span>✅</span>
            </h1>
            <p>
              We will process your info and we will replay to you Back as soon
              as Possible !
            </p>
            <cite>🎉 Thank you for your Trust ! 🎉</cite>
            <SubmitButtonModel onClick={props.switchModel}>
              Close
            </SubmitButtonModel>
          </FillStyled>,
          document.getElementById("FillOverLay"),
        )}
    </>
  );
}

export default OverLay;
