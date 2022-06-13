import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import { myContainer } from "./components/myStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <Provider store={store}>
    <div style={myContainer}>
      <App />
    </div>
  </Provider>
);
