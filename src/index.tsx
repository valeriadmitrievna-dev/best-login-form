import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./shared/styles/index.scss";

import App from "./app/App.tsx";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
