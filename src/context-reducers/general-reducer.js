import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions";

const general_reducer = (state, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      console.log("open");
      return {
        ...state,

        sidebar_state: true,
      };

    case CLOSE_SIDEBAR:
      console.log("close");
      return {
        ...state,
        sidebar_state: false,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default general_reducer;
