import styled from "styled-components";
export const Form = styled.form`
  width: 100%;
  padding: 2rem;
  justify-content: center;
  margin-top: 5rem;
  div {
    margin-top: 2rem;
    background-color: lightcoral;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    @media (min-width: 700px) {
      flex-direction: row;
      align-items: center;
      background-color: lightcyan;
    }
  }
  label {
    text-align: center;
    font-size: 1.8rem;
    padding: 1.4rem;
    color: whitesmoke;
    @media (min-width: 700px) {
      color: #333;
      padding: 1rem;
      flex-basis: 100px;
      flex-direction: row;
      align-items: center;
      background-color: lightcyan;
    }
  }
  div input {
    flex-grow: 1;
    font-family: inherit;
    font-size: 2rem;
    padding: 1rem;
  }

  & * {
    border: none;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  /* background-color: aliceblue; */
`;
export const Button = styled.button`
  border: rebeccapurple 2px solid;
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
    background-color: rebeccapurple;
    color: whitesmoke;
  }
  @media (min-width: 700px) {
    width: ${(p) => p.width || "40%"};
  }
`;
export const Main = styled.main`
  width: 90%;
  min-height: 70vh;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 5rem;
  background-color: ivory;
  article {
    display: flex;
    padding: 2rem;
    flex-wrap: wrap;
    padding-left: 5rem;
    align-items: center;
    text-transform: capitalize;
    border-bottom: solid #333 2px;
    font-size: 1.5rem;
    div:first-child {
      margin-right: 4rem;
      font-size: 2rem;
      font-weight: bold;
      font-style: italic;
    }
  }
`;
