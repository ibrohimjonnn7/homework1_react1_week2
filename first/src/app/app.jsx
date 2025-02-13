import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import HomePage from "../pages/home/home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
