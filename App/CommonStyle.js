import { StyleSheet } from "react-native";

var commonStyles = StyleSheet.create({
  scrollContainer: {
      flex: 1,
      backgroundColor: "#F7F6FB",
    },
splashContainer: {
    flex: 1,
    backgroundColor: "#F7F6FB",
    alignItems:'center',
    paddingBottom:"8%"
  },
  buttonContainer:{
    backgroundColor: "#7960FF",
    height: 50,
    width: "75%",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
    padding:5
  },
  buttonText: {
    color: "white",
    fontSize:18,
    fontFamily:'circular-book'
  },
  plainButton:{
    height: 50,
    width: "75%",
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
    padding:5,
    borderWidth:1,
    borderColor:'#7960FF'
  },
  plainButtonText:{
    color: "#7960FF",
    fontSize:18,
    fontFamily:'circular-book'
  },
  inputStyle: {
    width: 280,
    borderRadius: 5,
    height: 48,
    borderColor: "#9D9D9D",
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 5
  },
  boldText: {
    fontSize: 20,
    fontFamily:'circular-bold',
    marginTop:"2%"
  },
  normalText: {
    fontSize: 16,
    fontFamily:'circular-book',
    color: "#696969"
  },
  flashmessageStyle:{
    backgroundColor: "#7960FF",
    color: "#fff"
  },
  otpInputStyle: {
    backgroundColor: "white",
    borderBottomWidth: 2,
    color: "black",
    borderColor: "#7960FF",
    fontSize:24,
    textAlign:'center',
    fontFamily:'circular-book',
    margin:5
  },
  textError: {
  marginTop:-20,
  marginBottom: 5,
  color: "red",
  fontSize: 12,
  fontFamily: "circular-book"
  },
  profilePicImage: {
    marginTop:'18%',
    borderRadius: 50,
    width: 100,
    height: 45,
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
    zIndex: 0,
    borderWidth: 0.5,
    borderColor: "grey"
  },
  modalContainer:{
    backgroundColor:'white',
    marginTop:"60%",
    padding:5,
    borderColor:'#7960FF',
    borderWidth:1,
    width:"90%",
    justifyContent:'space-between',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 1.0
  }
})
export default commonStyles;
