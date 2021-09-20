import React from "react";
import styled from "styled-components";

const OverLayDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-color: #333;
  overflow-y: hidden;
  transition: 0.2s all;
  &:hover {
    opacity: 0.7;
  }
`;
const Fill = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 60vh;
  background-color: #eee;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content 1fr max-content;

  @media (min-width: 700px) {
    width: 35vw;
  }
  header,
  footer {
    padding: 1.4rem 1rem;
    background-color: ${(p) => p.bg || "rebeccapurple"};
    color: white;
    font-size: 1.4rem;
  }
  footer {
    text-align: center;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close {
      background-color: red;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  div {
    padding: 1rem;
    font-size: 1.6rem;
    font-style: italic;
  }
`;

function OverLay(props) {
  return (
    <>
      {!props.closeOverLayState && (
        <>
          <OverLayDrop onClick={props.closeOverLay} />
          <Fill>
            <header>
              Heloo{" "}
              <div className="close" onClick={props.closeOverLay}>
                &times;
              </div>{" "}
            </header>
            <div>{props.message || "Somethig Wrong"}</div>
            <footer>Footer</footer>
          </Fill>
        </>
      )}
    </>
  );
}

export default OverLay;
