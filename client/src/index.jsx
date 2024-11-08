import React from "react";
import ReactDOM from "react-dom/client";
import { pdfjs } from "react-pdf";

import App from "./App";
import NavigationProvider from "./contexts/NavigationContext";
import BreakpointProvider from "./contexts/BreakpointContext";
import "./locales/i18n";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc =
  window.location.origin + "/pdf.worker.min.mjs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <BreakpointProvider>
        <App />
      </BreakpointProvider>
    </NavigationProvider>
  </React.StrictMode>
);
// test
