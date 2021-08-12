import React, { useContext, useReducer } from "react";
import axios from "axios";
import { SET_HTML, SEND_EMAIL, EMAIL_RESPONSE, EMAIL_ERROR } from "../actions";
import reducer from "./contact-reducer";

const initialState = {
  html: "",
  title: "",
  email: "",
  success: true,
  response: {},
  error: {},
  emailLoading: false,
};

const ContactContext = React.createContext();

export const ContactProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setHTML = (html) => {
    dispatch({ type: SET_HTML, payload: html });
  };

  const sendEmail = async (title, email) => {
    dispatch({ type: SEND_EMAIL });
    const emailBody = {
      title: title,
      email: email,
      body: state.html,
    };

    await axios
      .post(process.env.REACT_APP_MAIL_URL, emailBody)
      .then((res) => {
        dispatch({ type: EMAIL_RESPONSE, payload: res.response });
      })
      .catch((err) => {
        dispatch({ type: EMAIL_ERROR, payload: err.response });
      });
  };

  return (
    <ContactContext.Provider
      value={{
        ...state,
        setHTML,
        sendEmail,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => {
  return useContext(ContactContext);
};
