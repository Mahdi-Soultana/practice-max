import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Cart from "../Cart/Cart";
import { CartContext } from "../../context/ActiveCartPorvider";
const Main = styled.main`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 4rem;
`;

function Layout({ children }) {
  const { state } = React.useContext(CartContext);
  console.log(state);
  return (
    <>
      {state && <Cart />}
      <Header />
      <Main>{children}</Main>
    </>
  );
}

export default Layout;
