import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./project-reducer";
import { GET_FEATURED_PROJECTS } from "../actions";
import { projects } from "../data/projectData";

const initialState = {
  projects: projects,
  featuredProjects: [],
  filteredProjects: [],
};

const ProjectContext = React.createContext();

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: GET_FEATURED_PROJECTS });
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  return useContext(ProjectContext);
};
