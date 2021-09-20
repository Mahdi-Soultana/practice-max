import React from "react";
import styled from "styled-components";
import { Wrapper, Logo } from "../UI/Warpper";
import CartComponent from "../Cart/CartComponent";
const Nav = styled.nav`
  /* margin-top: 2rem; */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 55px;
  background-color: #333;
  color: white;
  padding: 1rem;
`;
function NavComponent() {
  return (
    <Nav>
      <Wrapper>
        <div>
          <Logo>
            <h1>FoodLy</h1>
          </Logo>
          <CartComponent />
        </div>
      </Wrapper>
    </Nav>
  );
}

export default NavComponent;
