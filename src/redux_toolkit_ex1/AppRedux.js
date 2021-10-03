import React from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Products/Products";
import { Wrapper } from "./components/UI/UI";
import ActiveCartPorvider from "./context/ActiveCartPorvider";

function AppRedux() {
  return (
    <ActiveCartPorvider>
      <Layout>
        <Wrapper>
          <Products />
        </Wrapper>
      </Layout>
    </ActiveCartPorvider>
  );
}

export default AppRedux;
