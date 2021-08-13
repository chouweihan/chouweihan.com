import React, { useContext, useReducer } from "react";
import { SET_HTML, SEND_EMAIL, EMAIL_RESPONSE } from "../actions";
import reducer from "./contact-reducer";

const initialState = {
  html: "",
  title: "",
  email: "",
  response: {},
  emailLoading: false,
};

const ContactContext = React.createContext();

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setHTML = (html) => {
    dispatch({ type: SET_HTML, payload: html });
  };

  const sendEmail = () => {
    dispatch({ type: SEND_EMAIL });
  };

  const emailResponse = (success = false, res = null) => {
    dispatch({ type: EMAIL_RESPONSE, payload: { success, res } });
  };

  return (
    <ContactContext.Provider
      value={{
        ...state,
        setHTML,
        sendEmail,
        emailResponse,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};
