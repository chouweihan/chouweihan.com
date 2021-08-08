import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions";

const general_reducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        sidebar: true,
      };

    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebar: false,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default general_reducer;
