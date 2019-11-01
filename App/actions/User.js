
import * as Font from "expo-font";

export const LOAD_FONT_SUCCESS = "user/LOAD_FONT_SUCCESS"

export const loadFont = () => async dispatch => {
  await Font.loadAsync({
    "circular-book": require("../../assets/fonts/CircularStd-Book.ttf"),
    "circular-bold": require("../../assets/fonts/CircularStd-Bold.ttf")
  });
  dispatch({
    type: LOAD_FONT_SUCCESS
  });
};
