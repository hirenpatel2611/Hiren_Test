import {Platform} from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { showMessage } from "react-native-flash-message";
import Api from '../api/api';
import {
  URL_USER_LOGIN
} from '../config'

export const USER_NAME_LOGIN = "login/USER_NAME_LOGIN";
export const PASSWORD_LOGIN = "login/PASSWORD_LOGIN";
export const LOGIN_START = "login/LOGIN_START";

export const updateUsernameLogin = val => (dispatch) => {
  dispatch({
    type:USER_NAME_LOGIN,
    payload:val
  })
};

export const updatePasswordLogin = val => (dispatch) => {
  dispatch({
    type:PASSWORD_LOGIN,
    payload:val
  })
};


export const actionLogin = () => async (dispatch,getState) => {
  dispatch({
    type:LOGIN_START
  })
  const {usernameLogin,passwordLogin} = getState().login;
  let token =
    Platform.OS === "ios" ? null : await Notifications.getExpoPushTokenAsync();

  let test = new FormData();
  test.append("username", usernameLogin);
  test.append("password", passwordLogin);
  test.append("device_token", token);
  test.append("device_type", Platform.OS);
  Api.post(URL_USER_LOGIN, test)
    .then(async response => {
      console.log(response);
      if(response.status === 1){
        showMessage({
          message: "Success",
          description: "Login Successfully",
          type: "default",
          position: "center",
          duration: 1000
        });
      } else if(response.status === 0){
        showMessage({
          message: "Failed",
          description: response.message,
          type: "default",
          position: "center",
          duration: 1000
        });
      }
    })
};
