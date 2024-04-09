import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./styles/index.scss";
import { setupStore } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
