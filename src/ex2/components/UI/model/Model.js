import React, { useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CartContext from "./../../../context/CartContext";

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
  width: 100vw;
  min-height: 60vh;
  /* height: 100%; */

  background-color: #eee;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content minmax(100px, min-content) max-content max-content;

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
const Button = styled.button`
  margin-bottom: 1rem;
  border: ${(p) => p.borderC || "rebeccapurple"} 2px solid;
  background-color: ${(p) => p.bg || "transparent"};
  color: ${(p) => p.color || "rebeccapurple"};
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  font-family: inherit;
  padding: 1rem 1.8rem;
  font-size: 1.6rem;
  display: inline-block;
  margin-left: ${(p) => p.ml || "auto"};
  cursor: pointer;
  transition: 0.2s all ease;
  width: ${(p) => p.width || "100%"};
  justify-self: flex-start;
  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.8);
    background-color: ${(p) => p.color || "transparent"};
    color: ${(p) => p.bg || "rebeccapurple"};
    border: ${(p) => p.borderC || "rebeccapurple"} 2px solid;
  }
  /* @media (min-width: 700px) {
    width: ${(p) => p.width || "40%"};
  } */
`;
const Action = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`;

const TotalAmount = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin: 1rem;
`;
const NoItem = styled.h5`
  font-size: 3rem;
  padding: 2rem;
  margin: 0 auto;
`;
const AdjustAmount = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  align-self: flex-start;

  button {
    background-color: transparent;
    color: black;
    border: none;
    font-size: 2.5rem;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: transparent;
      color: #333;
      opacity: 0.6;
      /* border: 2px solid black; */
    }
  }
`;
const AmountDisplay = styled.span`
  /* margin-right: auto; */
  display: inline-block;
  margin-left: 2rem;
  background-color: ${(p) => p.bg || "white"};
  color: ${(p) => p.color || "black"};
  border-radius: 5px;
  padding: 0.3rem 0.7rem;
  border: solid 1.5px #333;
  font-size: 2rem;
  font-weight: bold;
`;
function Model() {
  const ctxCart = useContext(CartContext);

  return (
    <>
      {ctxCart.isOpen &&
        ReactDOM.createPortal(
          <OverLayDrop onClick={() => ctxCart.switchIsOpen()} />,
          document.getElementById("backdrop"),
        )}
      {ctxCart.isOpen &&
        ReactDOM.createPortal(
          <Fill>
            <header>
              <h2>Cart Products</h2>{" "}
              <div className="close" onClick={() => ctxCart.switchIsOpen()}>
                &times;
              </div>{" "}
            </header>
            <Body>
              <ul>
                {ctxCart.cart.map((item) => (
                  <Item key={item.id}>
                    <h2>{item.name}</h2>
                    <AmountDisplay>X{item.amount}</AmountDisplay>
                    <AdjustAmount>
                      <button
                        onClick={() => {
                          ctxCart.UpdatedItem({
                            name: item.name,
                            descrip: item.descrip,
                            price: item.price,
                            amount: 1,
                            id: item.id,
                            img: item.img,
                          });
                        }}
                      >
                        &#9650;
                      </button>
                      <button
                        onClick={() => {
                          ctxCart.removeItem(item.id);
                        }}
                      >
                        &#9660;
                      </button>
                    </AdjustAmount>
                    <h3>{Number(item.price).toFixed(2)}$</h3>
                  </Item>
                ))}
              </ul>
            </Body>
            {(ctxCart.cart.length === 0 && (
              <NoItem>No Item In Cart</NoItem>
            )) || (
              <TotalAmount>
                <h4>
                  TotalAmount :
                  <AmountDisplay bg="rebeccapurple" color="white">
                    X{ctxCart.cart.reduce((acc, item) => +item.amount + acc, 0)}
                  </AmountDisplay>
                </h4>
                <h1>{Number(ctxCart.totalAmount).toFixed(2)}$</h1>
              </TotalAmount>
            )}
            <Action>
              {ctxCart.cart.length > 0 && (
                <Button
                  bg="rebeccapurple"
                  color="whiteSmoke"
                  onClick={() => console.log("pay " + ctxCart.totalAmount)}
                >
                  Order
                </Button>
              )}
              <Button
                onClick={() => ctxCart.switchIsOpen()}
                bg="whiteSmoke"
                color="rebeccapurple"
              >
                Cancel
              </Button>
            </Action>
          </Fill>,
          document.getElementById("FillOverLay"),
        )}
    </>
  );
}

export default Model;
