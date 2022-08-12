import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SwapProvider from "./context/SwapProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SwapProvider>
      <App />
    </SwapProvider>
  </React.StrictMode>
);
