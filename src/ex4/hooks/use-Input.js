import { useReducer } from "react";

function inputReducer(state, action) {
  if (action.type === "CHANGE") {
    return { ...state, value: action.value };
  }
  if (action.type === "BLUR") {
    return { ...state, TouchState: false };
  }
  if (action.type === "FOCUS") {
    return { ...state, TouchState: true };
  }
  if (action.type === "REST") {
    return { value: "", TouchState: true };
  }
  return state;
}
const init = {
  value: "",
  TouchState: true,
};

function useInput(validateInput) {
  const [state, dispatch] = useReducer(inputReducer, init);
  const inputIsValid = validateInput(state.value);

  const hasError = !inputIsValid && !state.TouchState;

  const changeHandler = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value });
  };
  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const focusHandler = () => {
    dispatch({ type: "FOCUS" });
  };
  const reset = () => {
    dispatch({ type: "REST" });
  };
  return {
    focusHandler,
    blurHandler,
    changeHandler,
    hasError,
    inputIsValid,
    stateInput: state.value,
    reset,
  };
}

export default useInput;
