import React from "react";
import ReactDOM from "react-dom";

function useState(initialState) {
  let value = initialState;

  function setState(nextValue) {
    value = nextValue;
    ReactDOM.render(<input />, document.getElementById("root"));
  }

  return [value, setState];
}
