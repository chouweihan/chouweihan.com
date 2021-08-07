import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./general-reducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions";

const initialState = {
  sidebar_state: false,
};

const GeneralContext = React.createContext();

export const GeneralProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <GeneralContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};
