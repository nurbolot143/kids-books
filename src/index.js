import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

const increment = () => {
  store.dispatch({
    type: "counter/incremented",
  });
};

const decremented = () => {
  store.dispatch({
    type: "counter/decremented",
  });
};

store.subscribe(() => {
  console.log("changed!:", store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <button onClick={increment}>Add +1</button>
      <button onClick={decremented}>Add -1</button>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
