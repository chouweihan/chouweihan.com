import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GeneralProvider } from "./context-reducers/general-context";
import { ContactProvider } from "./context-reducers/contact-context";

ReactDOM.render(
  <React.StrictMode>
    <GeneralProvider>
      <ContactProvider>
        <App />
      </ContactProvider>
    </GeneralProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
