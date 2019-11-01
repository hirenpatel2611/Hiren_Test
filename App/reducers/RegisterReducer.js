import {
  UPDATE_MOBILE_NO_REGISTER,
  GET_REGISTER_OTP_START,
  GET_REGISTER_OTP_SUCCESS,
  GET_REGISTER_OTP_FAILAR,
  ON_OTP_INPUT_CHANGE,
  VALIDATE_REGISTER_OTP,
  UPDATE_NAME_REGISTER,
  UPDATE_STATE_AND_CODE,
  UPDATE_WORKSHOP_NAME_REGISTER,
  UPDATE_EMAIL_REGISTER,
  UPDATE_GSTIN_REGISTER,
  UPDATE_PASSWORD_REGISTER,
  UPDATE_CONFIRM_PASSWORD_REGISTER,
  UPDATE_REFFERAL_CODE_REGISTER,
  UPDATE_SERVICE_TYPE_REGISTER,
  UPDATE_REGISTER_DOCUMENT_UPLOAD,
  AGREE_TERMS_AND_CONDITION,
  GET_MAP_MODAL,
  GET_LOCATION_SUCCESS
} from "../actions/Register";
import { stateAndTin } from "../config";

const INITIAL_STATE = {
  registerMobileNo: "",
  loadingGetOtp: false,
  registerOtp: "",
  registerInputOtp: "",
  onSubmeetOtpForm: false,
  registerName: "",
  stateAndCode: "",
  registerWorkShopName: "",
  registerEmail: "",
  registerGSTIN: "",
  registerPassword: "",
  registerConfirmPassword: "",
  registerReferralCode: "",
  registerServiceType:[false, false, false, false, false],
  documentUriRegister:[],
  documentBase64Register:[],
  agreeCheckbox:false,
  mapModal:false,
  locationRegister:""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MOBILE_NO_REGISTER:
      {
        return {
          ...state,
          registerMobileNo: action.payload
        };
      }
      break;

    case GET_REGISTER_OTP_START:
      {
        return {
          ...state,
          loadingGetOtp: true
        };
      }
      break;

    case GET_REGISTER_OTP_FAILAR:
      {
        return {
          ...state,
          loadingGetOtp: false
        };
      }
      break;

    case GET_REGISTER_OTP_SUCCESS:
      {
        return {
          ...state,
          loadingGetOtp: false,
          registerOtp: action.payload
        };
      }
      break;

    case ON_OTP_INPUT_CHANGE:
      {
        return {
          ...state,
          registerInputOtp: action.payload
        };
      }
      break;

    case VALIDATE_REGISTER_OTP:
      {
        return {
          ...state,
          onSubmeetOtpForm: true
        };
      }
      break;

    case UPDATE_NAME_REGISTER:
      {
        return {
          ...state,
          registerName: action.payload
        };
      }
      break;

    case UPDATE_STATE_AND_CODE:
      {
        return {
          ...state,
          stateAndCode: stateAndTin[action.payload]
        };
      }
      break;

    case UPDATE_WORKSHOP_NAME_REGISTER:
      {
        return {
          ...state,
          registerWorkShopName: action.payload
        };
      }
      break;

    case UPDATE_EMAIL_REGISTER:
      {
        return {
          ...state,
          registerEmail: action.payload
        };
      }
      break;

    case UPDATE_GSTIN_REGISTER:
      {
        return {
          ...state,
          registerGSTIN: action.payload
        };
      }
      break;

    case UPDATE_PASSWORD_REGISTER:
      {
        return {
          ...state,
          registerPassword: action.payload
        };
      }
      break;

    case UPDATE_CONFIRM_PASSWORD_REGISTER:
      {
        return {
          ...state,
          registerConfirmPassword: action.payload
        };
      }
      break;

    case UPDATE_REFFERAL_CODE_REGISTER:
      {
        return {
          ...state,
          registerReferralCode: action.payload
        };
      }
      break;

    case UPDATE_SERVICE_TYPE_REGISTER:
      {
        return {
          ...state,
          registerServiceType:[...action.payload]
        }
      }
      break;

    case UPDATE_REGISTER_DOCUMENT_UPLOAD:
      {
        return {
          ...state,
          documentUriRegister:[
            ...state.documentUriRegister,
            action.payload.uri
          ],
          documentBase64Register: [
            ...state.documentBase64Register,
            action.payload.base64
          ]
        }
      }
      break;

    case AGREE_TERMS_AND_CONDITION:
      {
        return {
          ...state,
          agreeCheckbox:!state.agreeCheckbox
        }
      }
      break;

    case GET_MAP_MODAL:
      {
        return {
          ...state,
          mapModal:true
        }
      }
      break;

    case GET_LOCATION_SUCCESS:
      {
        return {
          ...state,
          locationRegister:action.payload
        }
      }
      break;

    default:
      return state;
      break;
  }
};
