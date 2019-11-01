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
  updateMobileNoRegister,
  getRegisterOtp
} from '../../actions';
import commonStyles from "../../CommonStyle";
import { BITMAP } from "../../../assets/images";

class RegisterMobile extends Component {
  render() {
    const{
      registerMobileNo,
      getRegisterOtp,
      loadingGetOtp
    } = this.props;
    return (
      <KeyboardAwareScrollView style={commonStyles.scrollContainer} enableOnAndroid>
      <View style={commonStyles.splashContainer}>
        <View style={Styles.subContainerStatement}>
          <Image
            source={BITMAP}
            resizeMode="contain"
            style={Styles.imageStyle}
          />
          <Text style={[commonStyles.boldText, { marginTop: "10%" }]}>
            Registration
          </Text>

          <Text style={[commonStyles.normalText, { marginTop: "2%" }]}>
            Enter your mobile number, we will send you OTP
          </Text>
          <Text style={commonStyles.normalText}>to verify your number</Text>
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
              this.props.updateMobileNoRegister(val)
            }}
            value={registerMobileNo}
          />
          <TouchableOpacity
            disabled={registerMobileNo.length === 10?false:true}
            style={[commonStyles.buttonContainer, { width: "98%",opacity: registerMobileNo.length === 10?1:0.4}]}
            onPress={()=> getRegisterOtp()}
          >
            <Text style={commonStyles.buttonText}>{loadingGetOtp?'Loading...':'Continue'}
            </Text>
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
  headerContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 50,
    padding: 5,
    width: "100%",
    flexDirection: "row"
  }
});

// RegisterMobile.defaultProps = {
//   updateMobileNoRegister: ()=>{},
//   registerMobileNo:""
// };


RegisterMobile.propTypes = {
  registerMobileNo: PropTypes.string.isRequired,
  updateMobileNoRegister: PropTypes.func.isRequired,
  getRegisterOtp:PropTypes.func.isRequired,
  loadingGetOtp:PropTypes.bool.isRequired
};

var mapStateToProps = ({register}) => {
  const{
    registerMobileNo,
    loadingGetOtp
  } = register;
  return{
    registerMobileNo,
    loadingGetOtp
  };
}

var mapFunctionToProps = {
updateMobileNoRegister,
getRegisterOtp
}
export default connect(mapStateToProps,mapFunctionToProps)(RegisterMobile);
