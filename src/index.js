import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Popup from "./popup";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
