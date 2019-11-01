import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import commonStyles from "../../CommonStyle";
import { ICON } from "../../../assets/images";

class splash extends Component {
  render() {
    return (
      <View style={commonStyles.splashContainer}>
        <Image source={ICON} resizeMode="contain" style={Styles.imageStyle} />
        <Text style={commonStyles.boldText}>Lets Get Started</Text>
        <View style={Styles.subContainerStatement}>
          <Text style={[commonStyles.normalText,{marginTop:"2%"}]}>Prompt breackdown service</Text>
          <Text style={commonStyles.normalText}>at your finger tip</Text>
        </View>
        <View style={Styles.subContainerButton}>
        <TouchableOpacity
          onPress={()=>Actions.registerMobile()}
          style={commonStyles.buttonContainer}>
          <Text style={commonStyles.buttonText}>Join Our Network</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{
            Actions.loginForm();
          }}
        style={commonStyles.plainButton}>
          <Text style={commonStyles.plainButtonText}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 200,
    marginTop:"31%"
  },
  subContainerStatement: {
    alignItems: "center",
    width:"100%"
  },
  subContainerButton:{
    alignItems: "center",
    width:"100%",
    marginTop:"60%"
  }
});

export default splash;
