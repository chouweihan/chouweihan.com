import { SET_HTML, SEND_EMAIL, EMAIL_RESPONSE, EMAIL_ERROR } from "../actions";

const contact_reducer = (state, action) => {
  switch (action.type) {
    case SET_HTML:
      return { ...state, html: action.payload };
    case SEND_EMAIL:
      return { ...state, emailLoading: true };

    case EMAIL_RESPONSE:
      return {
        ...state,
        emailLoading: false,
        success: true,
        response: action.payload,
      };

    case EMAIL_ERROR:
      return {
        ...state,
        emailLoading: false,
        success: false,
        error: action.payload,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default contact_reducer;
