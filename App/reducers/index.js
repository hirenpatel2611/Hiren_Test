import { combineReducers } from 'redux';

import LoginReducer from './LoginReducer';
import UserReducer from './UserReducer';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
  login:LoginReducer,
  user:UserReducer,
  register:RegisterReducer
});
