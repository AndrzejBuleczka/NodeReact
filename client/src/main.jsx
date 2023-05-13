import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App.jsx";
import "materialize-css/dist/css/materialize.min.css";
import reducers from "./reducers/index.jsx";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
