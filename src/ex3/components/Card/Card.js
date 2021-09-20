import React from "react";
import styled from "styled-components";

const CardStyled = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 5px -3px #333;
  background-color: #fff;
  margin-top: 2rem;
  @media (max-width: 700px) {
    & > * {
      display: block;
      margin: 0 auto;
    }
    h1 {
      width: 100%;
    }
  }
  p {
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
    font-size: 1.5rem;
    font-style: italic;
    word-wrap: wrap;
    /* background-color: red; */
  }
  time {
    font-size: 1.5rem;
    color: green;
    font-weight: bold;
  }
`;
function Card(props) {
  return (
    <CardStyled>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
      <time>{props.time}</time>
    </CardStyled>
  );
}

export default Card;
