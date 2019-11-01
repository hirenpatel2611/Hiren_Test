import {
  USER_NAME_LOGIN,
  PASSWORD_LOGIN,
  LOGIN_START
} from "../actions/Login";

const INITIAL_STATE = {
  usernameLogin:"",
  passwordLogin:"",
  loginLoading:false,
  loginStatus: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_NAME_LOGIN:
    {
      return {
        ...state,
        usernameLogin: action.payload,
      }
    }
      break;

      case PASSWORD_LOGIN:
      {
        return {
          ...state,
          passwordLogin: action.payload,
        }
      }
        break;

        case LOGIN_START:
        {
          return {
            ...state,
            loginLoading: true,
          }
        }
          break;

    default:
      return state;
      break;

  }
};
