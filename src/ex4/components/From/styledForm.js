import styled, { css } from "styled-components";

export const FormStyled = styled.form`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;
  background-color: whitesmoke;
  border-radius: 1em;
  padding: 3rem;
  display: grid;
  margin-top: 5vh;
  align-items: start;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const InputContainer = styled.label`
  display: grid;
  width: 100%;
  row-gap: 1rem;
  column-gap: 1rem;

  /* background-color: white; */
  grid-template-columns: minmax(50px, 70px) 1fr;
  /* grid-template-rows: max-content 1fr; */
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  margin: 1rem 0;
  h3 {
    word-wrap: wrap;
    font-size: 1.4rem;
  }
  input,
  select,
  textarea {
    width: 100%;
    font-size: 1.6rem;
    padding: 1rem;
    font-family: inherit;
    border: 2px solid ${(p) => (p.bg && "chocolate") || "rgba(254,0,0,.5)"};
    background-color: ${(p) => p.bg || "rgba(254,0,0,.5)"};
    border-radius: 1rem;
    outline: none;
  }
`;
export const SubmitButton = styled.button`
  background-color: chocolate;
  color: white;
  border: chocolate 2px solid;
  display: inline-block;
  padding: 0.9rem 2rem;
  border: none;
  font-size: 1.8rem;
  font-family: inherit;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background: #ccc;
  }
  &:hover {
    ${(p) =>
      p.valid
        ? css`
            background-color: transparent;
            color: chocolate;
            border: chocolate 2px solid;
          `
        : ""}
  }
  @media (min-width: 700px) {
    height: 5rem;
    margin-top: auto;
  }
`;
export const Container = styled.div`
  background: #333;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;
export const ErrorMessage = styled.p`
  font-size: 1.6rem;
  color: red;
  /* border-bottom: 2px solid red; */
  grid-column: 1/-1;
  margin-left: 1rem;
`;
export const Title = styled.h1`
  font-size: 3.6rem;
  color: whiteSmoke;
  /* border-bottom: 2px solid red; */

  margin: 1rem auto 0rem;
`;
