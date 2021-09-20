import styled from "styled-components";
export const FromStyled = styled.form`
  border: black 1px solid;
  border-radius: 0.4em;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background: darkturquoise;
  padding: 1rem;

  label span {
    display: inline-block;
    font-size: 2rem;
    text-transform: uppercase;
    font-style: italic;
  }
`;
export const Input = styled.input`
  width: 100%;
  border: black 1px solid;
  padding: 0.5rem;
  font-size: 2rem;
  font-family: inherit;
  display: inline-block;
  border-radius: 0.4em;
  margin-bottom: 1rem;
`;
export const TextArea = styled.textarea`
  width: 100%;
  border: black 1px solid;
  padding: 0.5rem;
  font-size: 2rem;
  font-family: inherit;
  display: inline-block;
  margin: 1rem 0;
  border-radius: 0.4em;
  height: 100px;
`;
export const Button = styled.button`
  width: 100%;
  border: black 1px solid;
  padding: 1rem;
  cursor: pointer;
  font-size: 2rem;
  font-family: inherit;
  display: inline-block;
  border-radius: 0.4em;
  background-color: darkmagenta;
  color: white;

  &:hover {
    opacity: 0.6;
  }
`;
