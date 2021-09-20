import styled from "styled-components";
export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CardContainer = styled.main`
  background-color: aliceblue;
  padding: 1rem;
`;

export const Logo = styled.div`
  h1 {
    font-size: 2.4rem;
  }
`;
