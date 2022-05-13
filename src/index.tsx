import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import gameReducer from "./reducers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// redux store
const myStore = createStore(gameReducer);

root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
