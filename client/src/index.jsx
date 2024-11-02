import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import NavigationProvider from "./contexts/NavigationContext";
import BreakpointProvider from "./contexts/BreakpointContext";
import "./locales/i18n";

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
