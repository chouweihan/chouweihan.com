import { GET_FEATURED_PROJECTS } from "../actions";

const project_reducer = (state, action) => {
  switch (action.type) {
    case GET_FEATURED_PROJECTS:
      const featuredProjects = state.projects.filter(
        (project) => project.featured === true
      );
      return {
        ...state,
        featuredProjects,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default project_reducer;
