import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import withValidation from "simple-hoc-validator";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import OtpInputs from "react-native-otp-inputs";
import isEmpty from "is-empty";
import {
  onOTPInputChange,
  validateRegisterOtp
} from '../../actions';
import commonStyles from "../../CommonStyle";
import { BITMAP1 } from "../../../assets/images";

class RegisterOtp extends Component {

  render() {
    console.log(this.props.onSubmeetOtpForm)
    const {
      validate,
      validateRegisterOtp,
      onOTPInputChange
     } = this.props;
    const {
      registerMobileNo,
      onSubmeetOtpForm,
      registerInputOtp,
    } = this.props.register;

    errors = onSubmeetOtpForm ? validate(this.props.register) : {};
    return (
      <KeyboardAwareScrollView style={commonStyles.scrollContainer} enableOnAndroid>
      <View style={commonStyles.splashContainer}>
        <View style={Styles.subContainerStatement}>
          <Image
            source={BITMAP1}
            resizeMode="contain"
            style={Styles.imageStyle}
          />
          <Text style={[commonStyles.boldText, { marginTop: "10%" }]}>
            Verification
          </Text>

          <Text style={[commonStyles.normalText, { marginTop: "2%" }]}>
            Enter 4 digit number that sent to {registerMobileNo}
          </Text>
          <Text style={commonStyles.normalText}>to verify your number</Text>
        </View>

        <View style={Styles.subContainerButton}>
        <OtpInputs
              focusedBorderColor={"white"}
              handleChange={code => onOTPInputChange(code)}
              numberOfInputs={4}
              inputStyles={commonStyles.otpInputStyle}
              inputContainerStyles={{ backgroundColor: "white",width:'15%',marginBottom:"7%" }}
            />
            {errors.registerInputOtp ? (
              <Text style={commonStyles.textError}>{errors.registerInputOtp[0]}</Text>
            ) : null}
            <TouchableOpacity
              disabled={registerInputOtp.length === 4?false:true}
              style={[commonStyles.buttonContainer,
                { width: "98%",opacity: registerInputOtp.length === 4?1:0.4}]}
              onPress={()=> validateRegisterOtp()}>
              <Text style={commonStyles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

const notEmpty = test => !isEmpty(test);
const rules = [
  {
    field: "registerInputOtp",
    condition: (registerInputOtp, state) => registerInputOtp === state.registerOtp,
    error: "OTP does not match"
  }
];

const Styles = StyleSheet.create({
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: "30%"
  },
  subContainerStatement: {
    alignItems: "center"
  },
  subContainerButton: {
    width: "90%",
    alignItems: "center",
    marginTop: "40%",
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
});

// RegisterMobile.defaultProps = {
//   updateMobileNoRegister: ()=>{},
//   registerMobileNo:""
// };


RegisterOtp.propTypes = {
  registerMobileNo: PropTypes.string.isRequired,
  registerOtp:PropTypes.number.isRequired,
  registerInputOtp: PropTypes.string.isRequired,
  onOTPInputChange: PropTypes.func.isRequired,
  validateRegisterOtp: PropTypes.func.isRequired
};

var mapStateToProps = ({register}) => {
  const{
    registerMobileNo,
    registerOtp,
    registerInputOtp,
    onSubmeetOtpForm
  } = register;
  return{
    registerMobileNo,
    registerOtp,
    registerInputOtp,
    onSubmeetOtpForm,
    register
  };
}

var mapFunctionToProps = {
onOTPInputChange,
validateRegisterOtp
}
export default connect(mapStateToProps,mapFunctionToProps)(withValidation(rules,RegisterOtp));
