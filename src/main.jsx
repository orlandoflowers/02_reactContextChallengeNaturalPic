import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { PhotoProvider } from "./contexts/PhotoContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PhotoProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PhotoProvider>
  </React.StrictMode>
);
