import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GeneralProvider } from "./context-reducers/general-context";

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
