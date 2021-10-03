import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
export const Action = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* align-content: space-between; */
  padding: 0.4rem;
  margin-bottom: 1rem;
`;
export const IconProduct = styled(MdAddShoppingCart)`
  position: absolute;
  right: 1rem;
  z-index: 2;
  top: 1rem;
  /* box-shadow: 0 0 4px #333; */
  font-size: ${(p) => (p.incart ? "2rem" : "1.5rem")};
  color: ${(p) => (p.incart ? "darkorange" : "darkorchid")};
`;
export const PriceItem = styled.h3`
  font-size: 1.1rem;
  color: ${(p) => (p.incart ? "darkorange" : "darkorchid")};
  /* margin-bottom: 1rem; */
  span {
    color: ${(p) => (p.incart ? "#333" : "black")};
    font-size: 1.2rem;
  }
`;

export const AddItem = styled.button`
  border: none;
  outline: none;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  padding: 0.5rem 0.8rem;
  border-radius: 0.3em;
  text-align: center;
  color: white;

  background-color: ${(p) => (p.incart ? "darkorange" : "darkorchid")};
  cursor: pointer;
  border: 1px darkorchid solid;
  &:hover {
    opacity: 0.6;
  }
`;
export const ProductStyle = styled.article`
  position: relative;
  overflow: hidden;
  max-width: 350px;
  width: 100%;
  /* height: 300px; */
  border-radius: 0.6em;
  box-shadow: 0.5px 2px 6px #333;
  display: grid;
  grid-template-rows: 180px max-content 75px max-content;
  picture {
    background-color: white;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  h2,
  p {
    padding: 0 1rem;

    hyphens: auto;
    height: 100%;
    overflow: hidden;
  }
  h2 {
    padding: 1rem 0 0.5rem 1rem;
    font-size: 1.1rem;
  }
`;
