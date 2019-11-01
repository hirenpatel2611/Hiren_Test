import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Actions } from "react-native-router-flux";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from "react-native-flash-message";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  updateUsernameLogin,
  updatePasswordLogin,
  actionLogin
} from '../../actions';
import commonStyles from "../../CommonStyle";
import { ICON, BACK_ARROW } from "../../../assets/images";

class Login extends Component {
  render() {
    const {
      usernameLogin,
      passwordLogin,
      actionLogin
    }=this.props
    return (
      <KeyboardAwareScrollView style={commonStyles.scrollContainer} enableOnAndroid>
      <View style={commonStyles.splashContainer}>

        <View style={Styles.headerContainer}>
          <TouchableOpacity
            onPress={() => Actions.splashFront()}
            style={[commonStyles.buttonContainer, { width: 50 }]}
          >
            <Image
              source={BACK_ARROW}
              resizeMode="cover"
              style={{ height: 15, width: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonForgatePass}>
            <Text
              style={{
                alignSelf: "flex-end",
                fontFamily: "circular-bold",
                color: "#7960FF"
              }}
            >
              forgot password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.subContainerStatement}>
          <Image source={ICON} resizeMode="contain" style={Styles.imageStyle} />
          <Text style={commonStyles.boldText}>Login</Text>

          <Text style={commonStyles.normalText}>
            Enter your mobile number and password
          </Text>
        </View>

        <View style={Styles.subContainerButton}>
          <TextInput
            style={commonStyles.inputStyle}
            underlineColorAndroid="transparent"
            placeholder="Mobile Number"
            placeholderTextColor="#9D9D9D"
            autoCapitalize="none"
            keyboardType={"phone-pad"}
            maxLength={10}
            onChangeText={(val) => {
              this.props.updateUsernameLogin(val)
            }}
            value={usernameLogin}
          />
          <TextInput
            style={commonStyles.inputStyle}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#9D9D9D"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(val) => {
              this.props.updatePasswordLogin(val)
            }}
            value={passwordLogin}
          />

          <TouchableOpacity
            onPress={()=>{
              actionLogin()
            }}
            style={[commonStyles.plainButton, { width: "98%" }]}
          >
            <Text style={commonStyles.plainButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <FlashMessage style={commonStyles.flashmessageStyle} />
      </View>
      </KeyboardAwareScrollView>
    );
  }
}
const Styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200
  },
  subContainerStatement: {
    alignItems: "center"
  },
  buttonForgatePass:{
    marginTop: 17,
    marginRight: 25
  },
  subContainerButton: {
    width: "90%",
    alignItems: "center",
    marginTop: "30%",
    backgroundColor: "white",
    borderRadius: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: "10%",
    padding: 30,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  headerContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 50,
    padding: 5,
    width: "100%",
    flexDirection: "row"
  }
});

Login.propTypes = {
  usernameLogin: PropTypes.string.isRequired,
  passwordLogin: PropTypes.string.isRequired,
  updateUsernameLogin: PropTypes.func.isRequired,
  updatePasswordLogin: PropTypes.func.isRequired,
  actionLogin:PropTypes.func.isRequired

};

var mapStateToProps = ({login}) => {
  const{
    usernameLogin,
    passwordLogin
  } = login;
  return{
    usernameLogin,
    passwordLogin
  };
}

var mapFunctionToProps = {
updatePasswordLogin,
updateUsernameLogin,
actionLogin
}
export default connect(mapStateToProps,mapFunctionToProps)(Login);
