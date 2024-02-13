import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./portfolio.jsx";
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Portfolio />
  </React.StrictMode>
);
