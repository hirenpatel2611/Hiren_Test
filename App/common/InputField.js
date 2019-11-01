import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from "react-native";
import PropTypes from 'prop-types';

class InputFields extends Component {
  constructor(props) {
		super(props);

		this.state = {
			OnFocusField:false
		};
	}

  onFocusInput = () => {
    this.setState({
      OnFocusField:true
    });
  }
  onFocusInpute = () => {
    this.setState({
      OnFocusField:false
    });

  }
  render(){
  const{
    Placeholder,
    Value,
    OnChangeText,
    TextInputStyle,
    SecureText
  }=this.props

  return(
    <View style={Styles.container}>
    <Text style={Styles.textStyle}>
    {this.state.OnFocusField?(Placeholder):null}</Text>
    <TextInput
      style={[Styles.textInputStyle,TextInputStyle]}
      underlineColorAndroid="transparent"
      placeholderTextColor="#9D9D9D"
      autoCapitalize="none"
      placeholder={Placeholder}
      value={Value}
      onFocus={()=>{
        this.onFocusInput()
      }}
      onEndEditing={()=>{
        Value !== ""?null:this.onFocusInpute()
      }}
      onChangeText={(text)=>{OnChangeText(text)}}
      secureTextEntry={SecureText}
      />
    </View>
  );
}
}

const Styles = StyleSheet.create({
  container: {
    marginTop:5,
    alignSelf:'center',
    width: "90%",
    marginLeft:"1%",
    marginRight:"1%",
    borderBottomWidth:1,
    borderColor:'grey',
    padding:5
  },
  textStyle:{
    color:'#7960FF',
    fontSize:12,
    fontFamily:'circular-bold'
  },
  textInputStyle:{
    fontFamily:'circular-bold',
    marginLeft:3
  }

});

InputFields.defaultProps = {
  textInputStyle: {},
  Placeholder:"",
  Value:"",
  SecureText:false
};

InputFields.propTypes = {
  Placeholder: PropTypes.string,
  Value: PropTypes.string.isRequired,
  TextInputStyle: PropTypes.object,
  OnChangeText: PropTypes.func.isRequired,
  SecureText:PropTypes.bool
};

export default InputFields;
