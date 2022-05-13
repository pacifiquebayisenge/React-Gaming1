import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, Reducer } from "redux";
import allReducers from "./reducers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/*
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const counter: Reducer = (state = 0, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
  }
};
*/
const myStore = createStore(allReducers);

//myStore.subscribe(() => console.log(myStore.getState()));

// const setup = () => {
//   if (myStore.getState() === 20) {
//     console.log("stop");
//     return;
//   } else {
//     myStore.dispatch(increment());
//   }
// };

// setInterval(() => {
//   //setup();
// }, 500);

root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
