import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PostContext from "./Context/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostContext>
    <App />
  </PostContext>
);
