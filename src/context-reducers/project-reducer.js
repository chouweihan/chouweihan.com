import {
  GET_FEATURED_PROJECTS,
  GET_SINGLE_PROJECT,
  SET_LOADING,
} from "../actions";

const project_reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_FEATURED_PROJECTS:
      const featuredProjects = state.projects.filter(
        (project) => project.featured === true
      );
      return {
        ...state,
        featuredProjects,
      };

    case GET_SINGLE_PROJECT:
      const singleProject = state.projects.filter(
        (project) => project.id === Number(action.payload)
      );

      if (singleProject.length > 0) {
        return {
          ...state,
          singleProject: singleProject[0],
          error: false,
          loading: false,
        };
      } else {
        return {
          ...state,
          error: true,
          loading: false,
        };
      }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default project_reducer;
