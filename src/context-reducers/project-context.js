import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./project-reducer";
import {
  GET_FEATURED_PROJECTS,
  GET_SINGLE_PROJECT,
  SET_LOADING,
} from "../actions";
import { projects } from "../data/projectData";

const initialState = {
  projects: projects,
  featuredProjects: [],
  singleProject: [],
  error: false,
  loading: true,
};

const ProjectContext = React.createContext();

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getSingleProject = (id) => {
    dispatch({ type: GET_SINGLE_PROJECT, payload: id });
  };

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  useEffect(() => {
    dispatch({ type: GET_FEATURED_PROJECTS });
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        getSingleProject,
        setLoading,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
