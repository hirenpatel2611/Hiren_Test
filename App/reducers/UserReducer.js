import { LOAD_FONT_SUCCESS } from "../actions/User";

const INITIAL_STATE = {
  loadFontsuccess: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FONT_SUCCESS:
      {
        return {
          ...state,
          loadFontsuccess: true
        };
      }
      break;
    default:
      return state;
      break;
  }
};
