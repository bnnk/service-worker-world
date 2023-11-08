import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
navigator.serviceWorker.register("/worker.js", {
  updateViaCache: "all"
});
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
