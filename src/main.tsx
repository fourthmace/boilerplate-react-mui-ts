// LIBRARIES
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// App
import App from "./App.tsx";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
