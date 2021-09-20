import React from "react";

import HeroComponent from "./Hero";
import NavComponent from "./Nav";

function Header() {
  return (
    <>
      <header>
        <NavComponent />
        <HeroComponent />
      </header>
    </>
  );
}

export default Header;
