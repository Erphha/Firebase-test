import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/redux";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode dir="rtl">
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
