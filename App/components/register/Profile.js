import React, { Component } from "react";
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Modal
} from "react-native";
import CheckBox from "react-native-checkbox";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Permissions from 'expo-permissions';
import * as Location from "expo-location";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dropdown } from "react-native-material-dropdown";
import commonStyles from "../../CommonStyle";
import {
  MECHANIC,
  MOTORCYCLE,
  CAR,
  HEAVYVEHICLE,
  TOWING,
  TYRE
 } from "../../../assets/images";
import {
  updateNameRegister,
  updateStateAndCode,
  updateWorkShopNameRegister,
  updateEmailRegister,
  updateGSTINRegister,
  updatePasswordRegister,
  updateConfirmPasswordRegister,
  updateRefferalCodeRegister,
  updateServiceTypeRegister,
  deleteDocumentRegister,
  addDocument,
  agreeTermsAndCondition,
  onPressTermsAndCondition,
  getMapModal,
  getLocationSuccess
 } from "../../actions";
import InputFields from "../../common/InputField";
import {stateAndTin} from '../../config'

class RegisterProfile extends Component {
  componentWillMount(){
    this.getPermissionAsync();
    this._getLocationAsync();
  }
  getPermissionAsync = async () => {
      if (Platform.OS === "ios") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    };

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
          alert("Sorry, we need Location permissions to make this work!");
        }

        if (status !== "granted") {
          console.log(status);
        }

        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced
        });
        this.props.getLocationSuccess(location);
      };

  renderDocument() {
    arr = this.props.documentUriRegister.map(documentUri => {
      return (
        <View
          key={documentUri}
          style={{ margin: 5}}
        >
          <Image
            key={documentUri}
            style={Styles.documentImage}
            resizeMode="cover"
            source={{ uri: documentUri }}
          />
          <TouchableOpacity
            style={Styles.documentDeleteButton}
            onPress={() => {
              this.props.deleteDocumentRegister(documentUri);
            }}
          >
            <Text style={{ color: "#7960FF", fontFamily: "circular-bold" }}>
              X
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
    return arr;
  }

  render() {
    const {
      registerName,
      stateAndCode,
      registerWorkShopName,
      registerEmail,
      registerGSTIN,
      registerPassword,
      registerConfirmPassword,
      registerReferralCode,
      registerServiceType,
      mapModal
     } = this.props;
    return (
      <KeyboardAwareScrollView
        style={[commonStyles.scrollContainer,{opacity:mapModal?0.5:1}]}
        enableOnAndroid
      >
        <View style={commonStyles.splashContainer}>
          <Image source={MECHANIC} style={commonStyles.profilePicImage} />
          <View style={{ width: "100%", marginTop: "50%",marginBottom:10 }}>
            <InputFields
              Placeholder="Workshop Name"
              Value={registerWorkShopName}
              OnChangeText={this.props.updateWorkShopNameRegister}
            />
            <InputFields
              Placeholder="Full Name"
              Value={registerName}
              OnChangeText={this.props.updateNameRegister}
            />
            <View style={Styles.stateContainer}>
            <Dropdown
                      label="State"
                      data={stateAndTin}
                      dropdownOffset={{ top: 0, left: 0 }}
                      containerStyle={{ width: "60%" }}
                      itemTextStyle={Styles.dropdownItemStyle}
                      pickerStyle={{ height: "50%" }}
                      animationDuration={10}
                      baseColor={
                        this.props.stateAndCode
                          ? "#7960FF"
                          : "rgba(0, 0, 0,0.5)"
                      }
                      textColor={"rgba(0, 0, 0,2)"}
                      onChangeText={(value, index) => {
                        this.props.updateStateAndCode(index);
                      }}
                    />
                    <Dropdown
                      label="TIN"
                      value={stateAndCode.code}
                      dropdownOffset={{ top: 0, left: 0 }}
                      containerStyle={{ width: "30%" }}
                      baseColor={
                        this.props.stateAndCode
                          ? "#7960FF"
                          : "rgba(0, 0, 0,0.5)"
                      }
                      itemTextStyle={Styles.dropdownItemStyle}
                    />
            </View>
            <InputFields
              Placeholder="Email"
              Value={registerEmail}
              OnChangeText={this.props.updateEmailRegister}
            />
            <InputFields
              Placeholder="GSTIN"
              Value={registerGSTIN}
              OnChangeText={this.props.updateGSTINRegister}
            />
            <InputFields
              Placeholder="Password"
              Value={registerPassword}
              OnChangeText={this.props.updatePasswordRegister}
              SecureText={true}
            />
            <InputFields
              Placeholder="Confirm Password"
              Value={registerConfirmPassword}
              OnChangeText={this.props.updateConfirmPasswordRegister}
              SecureText={true}
            />
            <InputFields
              Placeholder="Referral Code"
              Value={registerReferralCode}
              OnChangeText={this.props.updateRefferalCodeRegister}
            />
            <Text style={Styles.serviceTypeHeader}>Service Type</Text>
            <View style={Styles.mechanicTypeContainer}>

            <TouchableOpacity
              activeOpacity={1}
              elevation={5}
              onPress={() => {
                this.props.updateServiceTypeRegister(0);
              }}
              style={[
                Styles.buttonMechanicType,
                {
                  backgroundColor: registerServiceType[0]
                    ? "#7960FF"
                    : "white"
                }
              ]}
            >
              <Image style={Styles.imageMechanicType} source={MOTORCYCLE} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              elevation={5}
              onPress={() => {
                this.props.updateServiceTypeRegister(1);
              }}
              style={[
                Styles.buttonMechanicType,
                {
                  backgroundColor: registerServiceType[1]
                    ? "#7960FF"
                    : "white"
                }
              ]}
            >
              <Image style={Styles.imageMechanicType} source={CAR} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              elevation={5}
              onPress={() => {
                this.props.updateServiceTypeRegister(2);
              }}
              style={[
                Styles.buttonMechanicType,
                {
                  backgroundColor: registerServiceType[2]
                    ? "#7960FF"
                    : "white"
                }
              ]}
            >
              <Image style={Styles.imageMechanicType} source={HEAVYVEHICLE} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              elevation={5}
              onPress={() => {
                this.props.updateServiceTypeRegister(3);
              }}
              style={[
                Styles.buttonMechanicType,
                {
                  backgroundColor: registerServiceType[3]
                    ? "#7960FF"
                    : "white"
                }
              ]}
            >
              <Image style={Styles.imageMechanicType} source={TOWING} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              elevation={5}
              onPress={() => {
                this.props.updateServiceTypeRegister(4);
              }}
              style={[
                Styles.buttonMechanicType,
                {
                  backgroundColor: registerServiceType[4]
                    ? "#7960FF"
                    : "white"
                }
              ]}
            >
              <Image style={Styles.imageMechanicType} source={TYRE} />
            </TouchableOpacity>
            </View>
            <View style={Styles.documentContainer}>
                      {this.renderDocument()}
            </View>
            <TouchableOpacity
                    underlayColor="white"
                    style={[Styles.addDocumentButton,
                      {opacity:this.props.documentUriRegister.length >= 3
                      ? 0.5
                      : 1}]}
                    disabled={
                      this.props.documentUriRegister.length >= 3
                        ? true
                        : false
                    }
                    onPress={() => {
                      this.props.addDocument();
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "circular-book",
                        fontSize: 14,
                        color: "#7960FF"
                      }}
                    >
                      +Add Documents
                    </Text>
                  </TouchableOpacity>
          </View>
          <View   style={{
                  marginLeft: 16,
                  flexDirection: "row",
                  margin: 10
                }}>
          <CheckBox
          label="I agree,"
               checked={this.props.agreeCheckbox}
               onChange={() => {
                 this.props.agreeTermsAndCondition();
               }}
               checkboxStyle={Styles.checkboxStyle}
               labelStyle={Styles.checkboxLabel}
           />
           <Text
                  style={Styles.termsTextStyle}
                  onPress={() => {
                    this.props.onPressTermsAndCondition();
                  }}
                >
                  Terms and Conditions
                </Text>
           </View>
          <TouchableOpacity
            onPress={()=>{
              this.props.getMapModal()
            }}
            style={[commonStyles.buttonContainer,{opacity:this.props.agreeCheckbox?1:0.5}]}
            disabled={this.props.agreeCheckbox?false:true}
            >
          <Text style={commonStyles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <Modal
                visible={mapModal}
                animationType="slide"
                onRequestClose={() => {
                  console.log("Modal has been closed.");
                }}
                transparent={true}
                opacity={0.5}
              >
          <View style={commonStyles.modalContainer}>
          <View style={{height:"150%",width:"93%"}}>
          <MapView
                        style={{
                          ...StyleSheet.absoluteFillObject,
                          borderRadius: 15,
                          borderWidth: 1,
                          borderColor: "#7960FF",
                          marginBottom:10,
                        }}
                        provider={PROVIDER_GOOGLE}
                        ref={component => (this._map = component)}
                        onLayout={e => {
                          this._map.animateToRegion(
                            {
                              latitude: this.props.locationRegister.coords
                                .latitude,
                              longitude: this.props.locationRegister.coords
                                .longitude,
                              latitudeDelta: 0.0922,
                              longitudeDelta: 0.0421
                            },
                            1
                          );
                        }}
                      >
                        <MapView.Marker.Animated
                          coordinate={this.props.locationRegister.coords}
                        />
                      </MapView>
                      </View>
          <TouchableOpacity
            onPress={()=>{
              this.props.getMapModal()
            }}
            style={[commonStyles.buttonContainer,{opacity:this.props.agreeCheckbox?1:0.5}]}
            disabled={this.props.agreeCheckbox?false:true}
            >
          <Text style={commonStyles.buttonText}>Continue</Text>
          </TouchableOpacity>
          </View>
          </Modal>
      </KeyboardAwareScrollView>
    );
  }
}

const Styles = StyleSheet.create({
  stateContainer:{
    flexDirection:'row',
    marginLeft:18,
    marginTop:16,
    paddingTop:10,
    justifyContent:'space-between',
    width:"90%"
  },
  dropdownItemStyle:{
    fontFamily: "circular-bold",
    fontSize: 16
  },
  mechanicTypeContainer: {
  flexDirection: "row",
  padding: 10,
  alignItems: "center",
  justifyContent: "space-around",
  width: "100%",
  top:5
  },
  buttonMechanicType: {
    borderRadius: 100,
    alignItems: "center",
    padding: 4,
    borderRadius: 60,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  imageMechanicType: {
    width: 50,
    height: 50,
    resizeMode: "contain"
  },
  serviceTypeHeader:{
    fontFamily:'circular-bold',
    fontSize:14,
    color:'#7960FF',
    marginLeft:"6%",
    top:10
  },
  documentImage:{
    width:60,
    height:60,
    resizeMode: "contain",
    borderRadius: 5,
    position: "absolute"
  },
  documentDeleteButton:{
    height: 17,
    width: 17,
    borderRadius: 10,
    backgroundColor: "#FFFFFFFF",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  addDocumentButton:{
    borderWidth:1,
    borderRadius:30,
    borderColor:'#7960FF',
    alignSelf:'center',
    alignItems:'center',
    width:'45%',
    padding:2
  },
  documentContainer:{
    flexDirection: "row",
    padding:10,
    paddingLeft:15,
    marginBottom:10,
    marginTop:10,
  },
  checkboxStyle:{
    tintColor: "#7960FF",
    height: 18,
    width: 18
  },
  checkboxLabel:{
    fontFamily: "circular-bold",
    fontSize: 16
  },
  termsTextStyle:{
    fontFamily: "circular-book",
    fontSize: 16,
    color: "#7960FF"
  }
});

var mapStateToProps = ({ register }) => {
  const {
     registerName,
     loadingGetOtp,
     stateAndCode,
     registerWorkShopName,
     registerEmail,
     registerGSTIN,
     registerPassword,
     registerConfirmPassword,
     registerReferralCode,
     registerServiceType,
     documentUriRegister,
     agreeCheckbox,
     mapModal,
     locationRegister
    } = register;
  return {
    registerName,
    loadingGetOtp,
    stateAndCode,
    registerWorkShopName,
    registerEmail,
    registerGSTIN,
    registerPassword,
    registerConfirmPassword,
    registerReferralCode,
    registerServiceType,
    documentUriRegister,
    agreeCheckbox,
    mapModal,
    locationRegister
  };
};

var mapFunctionToProps = {
  updateNameRegister,
  updateWorkShopNameRegister,
  updateStateAndCode,
  updateEmailRegister,
  updateGSTINRegister,
  updatePasswordRegister,
  updateConfirmPasswordRegister,
  updateRefferalCodeRegister,
  updateServiceTypeRegister,
  deleteDocumentRegister,
  addDocument,
  agreeTermsAndCondition,
  onPressTermsAndCondition,
  getMapModal,
  getLocationSuccess
};

export default connect(
  mapStateToProps,
  mapFunctionToProps
)(RegisterProfile);
