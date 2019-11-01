import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Scene, Router, ActionConst, Drawer } from "react-native-router-flux";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loadFont } from "./actions";
import commonStyles from "./CommonStyle";
import SplashFront from "./components/splash/Splash";
import LoginForm from "./components/login/Login";
import RegisterMobile from "./components/register/RegisterMobile";
import RegisterOtp from "./components/register/RegisterOtp";
import RegisterProfile from "./components/register/Profile";

class RouterComponent extends Component {
  componentWillMount() {
    this.props.loadFont();
  }
  render() {
    if (!this.props.loadFontsuccess) {
      return (
        <View style={Styles.loadingView}>
          <Text style={Styles.loadingText}>Loading...</Text>
        </View>
      );
    }
    return (
      <Router>
        <Scene key="root" panHandlers={null} gesturesEnabled={false}>
          <Scene
            key="splashFront"
            component={SplashFront}
            hideNavBar={true}
            navTransparent="true"
            type={ActionConst.RESET}
            initial={true}
          />
          <Scene
            key="loginForm"
            component={LoginForm}
            navTransparent="true"
            type={ActionConst.RESET}
          />
          <Scene
            key="registerMobile"
            component={RegisterMobile}
            navTransparent="true"
            type={ActionConst.RESET}
          />
          <Scene
            key="registerOtp"
            component={RegisterOtp}
            navTransparent="true"
            type={ActionConst.RESET}
          />
          <Scene
            key="registerProfile"
            component={RegisterProfile}
            navTransparent="true"
            type={ActionConst.RESET}
            
          />
        </Scene>
      </Router>
    );
  }
}

RouterComponent.propTypes = {
  loadFontsuccess: PropTypes.bool.isRequired,
  loadFont: PropTypes.func.isRequired
};

const Styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    color: "#7960FF"
  }
});

const mapStateToProps = ({ user }) => {
  const { loadFontsuccess } = user;

  return { loadFontsuccess };
};

const mapFunctionToProps = {
  loadFont
};

export default connect(
  mapStateToProps,
  { loadFont }
)(RouterComponent);
