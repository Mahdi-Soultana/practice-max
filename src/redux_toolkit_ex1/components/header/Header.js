import React from "react";
import { Logo, Nav } from "./styleHeader";
import StyleCartIcon from "../Cart/IconCart";
function Header() {
  return (
    <>
      <Nav>
        <Logo>ReduxToolKit</Logo>
        <StyleCartIcon />
      </Nav>
    </>
  );
}

export default Header;
