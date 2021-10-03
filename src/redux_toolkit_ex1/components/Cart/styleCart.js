import styled, { css } from "styled-components";
import { RiShoppingCart2Fill } from "react-icons/ri";
export const StyleCartIcon = styled(RiShoppingCart2Fill)`
  border: none;
  outline: none;
  cursor: ${(p) => (p.isempty ? "default" : "pointer")};
  display: inline-block;
  &:hover {
    opacity: ${(p) => (p.isempty ? "1" : ".6")};
  }
  font-size: 2rem;

  /* text-stroke: 2px white; */
  text-align: center;
  color: ${(p) => (p.isempty ? "lightsalmon" : "white")};
`;
export const OverLayCart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
export const CartStyle = styled.section`
  display: grid;
  grid-template-rows: 1fr min-content;
  font-size: 1.5rem;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: #333;
  ul {
    padding: 1rem;
  }

  > div {
    padding: 2rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkorchid;
    span {
      font-size: 3rem;
      font-style: italic;
    }
  }
  li {
    margin-bottom: 2rem;
  }

  @media (min-width: 700px) {
    width: 40vw;
  }
`;

export const Item = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Count = styled.span`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  background-color: white;
  color: black;
  border: 1px black solid;
  border-radius: 0.5em;
`;
export const PriceItem = styled.span`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;

  color: white;
  border: 1px white solid;
  border-radius: 0.5em;
`;
export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.5rem;
  button {
    border: none;
    outline: none;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-align: center;
    background-color: white;
    width: 50px;
    height: 30px;
    cursor: pointer;
    border: 1px black solid;
    &:first-child {
      margin-right: 1rem;
    }
    &:hover {
      background-color: darkorchid;
      color: white;
    }
  }
`;

export const CountingNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6em;
  border: 2px solid white;
  color: white;
  background-color: darkorange;
  padding: 0.2rem 0.5rem;
  margin-left: 0.5rem;
  margin-right: 1.5rem;
  ${(p) =>
    p.isempty
      ? css`
          cursor: default;
          font-size: 0.8rem;
          font-weight: 200;
        `
      : css`
          cursor: pointer;
          font-size: 1.3rem;
          font-weight: bold;
        `}
`;
export const CartIconContainer = styled.button`
  display: flex;
  cursor: ${(p) => (p.isempty ? "default" : "pointer")};
  background-color: transparent;
  border: none;
  outline: none;
  align-items: center;
  justify-content: space-between;
  opacity: ${(p) => (p.isempty ? ".5" : "1")};
  &:hover span {
    ${(p) =>
      p.isempty
        ? ""
        : css`
            color: darkorange;
            background-color: white;
            border: 2px solid darkorange;
            opacity: ${(p) => (p.isempty ? "1" : ".6")};
          `}
  }
  &:hover svg {
    opacity: ${(p) => (p.isempty ? "1" : ".6")};
  }
`;
