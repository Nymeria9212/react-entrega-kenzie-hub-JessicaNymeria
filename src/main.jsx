import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./style/globalStyle";
import { Provider } from "./Providers/provider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <GlobalStyle />

        <App />

        <ToastContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
