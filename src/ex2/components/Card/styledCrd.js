import styled from "styled-components";
export const Card = styled.section`
  box-shadow: 0 1px 4px #333;
  background-color: lightcoral;
  margin: 1rem;

  /* justify-content: space-between; */
  @media (min-width: 700px) {
    justify-content: space-between;
    display: flex;
  }
  figure {
    width: 100%;
    height: 140px;
    max-width: 230px;

    /* padding: 1rem; */
    margin: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem;
  p {
    width: 50%;
  }
`;
export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > input {
    padding: 0.3rem 1rem;
    font-size: 2rem;
  }
  > div {
    margin-top: 1rem;
    margin-right: 1rem;
  }
`;
