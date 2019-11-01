import {Linking} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";
import { Actions } from "react-native-router-flux";
import Api from '../api/api';
import {
  URL_USER_OTP
} from '../config'
export const UPDATE_MOBILE_NO_REGISTER = "register/UPDATE_MOBILE_NO_REGISTER";
export const GET_REGISTER_OTP_START = "register/GET_REGISTER_OTP_START";
export const GET_REGISTER_OTP_SUCCESS = "register/GET_REGISTER_OTP_SUCCESS";
export const GET_REGISTER_OTP_FAILAR = "register/GET_REGISTER_OTP_FAILAR";
export const ON_OTP_INPUT_CHANGE = "register/ON_OTP_INPUT_CHANGE";
export const VALIDATE_REGISTER_OTP = "register/VALIDATE_REGISTER_OTP";
export const UPDATE_NAME_REGISTER = "register/UPDATE_NAME_REGISTER";
export const UPDATE_STATE_AND_CODE = "register/UPDATE_STATE_AND_CODE";
export const UPDATE_WORKSHOP_NAME_REGISTER = "register/UPDATE_WORKSHOP_NAME_REGISTER";
export const UPDATE_EMAIL_REGISTER = "register/UPDATE_EMAIL_REGISTER";
export const UPDATE_GSTIN_REGISTER = "register/UPDATE_GSTIN_REGISTER";
export const UPDATE_PASSWORD_REGISTER = "register/UPDATE_PASSWORD_REGISTER";
export const UPDATE_CONFIRM_PASSWORD_REGISTER = "register/UPDATE_CONFIRM_PASSWORD_REGISTER";
export const UPDATE_REFFERAL_CODE_REGISTER = "register/UPDATE_REFFERAL_CODE_REGISTER";
export const UPDATE_SERVICE_TYPE_REGISTER = "register/UPDATE_SERVICE_TYPE_REGISTER";
export const UPDATE_REGISTER_DOCUMENT_UPLOAD = "register/UPDATE_REGISTER_DOCUMENT_UPLOAD";
export const AGREE_TERMS_AND_CONDITION = "register/AGREE_TERMS_AND_CONDITION";
export const GET_MAP_MODAL = "register/GET_MAP_MODAL";
export const GET_LOCATION_SUCCESS = "register/GET_LOCATION_SUCCESS";

export const updateMobileNoRegister = val => (dispatch) => {
  dispatch({
    type:UPDATE_MOBILE_NO_REGISTER,
    payload:val
  })
};

export const getRegisterOtp = () => (dispatch,getState) => {
  const {registerMobileNo} = getState().register;

  dispatch({
    type:GET_REGISTER_OTP_START
  })

  let test = new FormData();
  test.append("mobile", registerMobileNo);
  Api.post(URL_USER_OTP, test)
    .then(response => {
      console.log(response);
      if(response.status === 0){
        dispatch({
          type:GET_REGISTER_OTP_FAILAR
        })
        showMessage({
          message: "Failed",
          description: response.message,
          type: "default",
          position: "center",
          duration: 1000
        });
      } else if(response.loggedIn === 1){
        dispatch({
          type:GET_REGISTER_OTP_SUCCESS,
          payload:response.OTP
        })
        showMessage({
          message: "Success",
          description: response.message,
          type: "default",
          position: "center",
          duration: 1000
        });
        Actions.registerOtp();
      }
    })
}

export const onOTPInputChange = otp => (dispatch,getState) => {
dispatch({
  type:ON_OTP_INPUT_CHANGE,
  payload:otp
})
}

export const validateRegisterOtp = () => (dispatch) => {
  dispatch({
    type:VALIDATE_REGISTER_OTP,
  })
}

export const updateNameRegister = name => (dispatch) => {
  dispatch({
    type:UPDATE_NAME_REGISTER,
    payload:name
  })
}

export const updateStateAndCode = index => (dispatch) => {
  dispatch({
    type:UPDATE_STATE_AND_CODE,
    payload:index
  })
}

export const updateWorkShopNameRegister = val => (dispatch) => {
  dispatch({
    type:UPDATE_WORKSHOP_NAME_REGISTER,
    payload:val
  })
}

export const updateEmailRegister = email => (dispatch) => {
  dispatch({
    type:UPDATE_EMAIL_REGISTER,
    payload:email
  })
}

export const updateGSTINRegister = gstin => (dispatch) => {
  dispatch({
    type:UPDATE_GSTIN_REGISTER,
    payload:gstin
  })
}

export const updatePasswordRegister = password => (dispatch) => {
  dispatch({
    type:UPDATE_PASSWORD_REGISTER,
    payload:password
  })
}

export const updateConfirmPasswordRegister = password => (dispatch) => {
  dispatch({
    type:UPDATE_CONFIRM_PASSWORD_REGISTER,
    payload:password
  })
}

export const updateRefferalCodeRegister = gstin => (dispatch) => {
  dispatch({
    type:UPDATE_REFFERAL_CODE_REGISTER,
    payload:gstin
  })
}

export const updateServiceTypeRegister = index => (dispatch,getState) => {
  console.log(index);
  const {registerServiceType} = getState().register;
  registerServiceType[index] = !registerServiceType[index]
  dispatch({
    type:UPDATE_SERVICE_TYPE_REGISTER,
    payload:registerServiceType
  })
}

export const deleteDocumentRegister = () => (dispatch) => {

}

export const addDocument = () => async (dispatch) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    base64: true,
    allowsEditing: true,
    aspect: [4, 4],
    key: "123"
  });
  if (!result.cancelled) {
    dispatch({
      type: UPDATE_REGISTER_DOCUMENT_UPLOAD,
      payload: result
    });
  }
}

export const agreeTermsAndCondition = bool => (dispatch) => {
  dispatch({
    type:AGREE_TERMS_AND_CONDITION,
  })
}

export const onPressTermsAndCondition = () => (dispatch) => {
  Linking.openURL("http://ilifenetwork.com/api/web/Vendor.pdf");
}

export const getMapModal = () => (dispatch) => {
  dispatch({
    type:GET_MAP_MODAL,
  })
}

export const getLocationSuccess = location => (dispatch) => {
  dispatch({
    type:GET_LOCATION_SUCCESS,
    payload:location
  })
}
