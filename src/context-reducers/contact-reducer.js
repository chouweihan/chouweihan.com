import { SET_HTML, SEND_EMAIL, EMAIL_RESPONSE } from "../actions";

const contact_reducer = (state, action) => {
  switch (action.type) {
    case SET_HTML:
      return { ...state, html: action.payload };
    case SEND_EMAIL:
      return { ...state, emailLoading: true };

    case EMAIL_RESPONSE:
      const { success, res } = action.payload;
      if (success) {
        return {
          ...state,
          emailLoading: false,
          response: res,
        };
      } else {
        return {
          ...state,
          emailLoading: false,
        };
      }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default contact_reducer;
