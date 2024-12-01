import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Add BrowserRouter here

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter> {/* Move BrowserRouter here */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
