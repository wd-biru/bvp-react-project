import { combineReducers } from "redux";
import userData from "../login/loginReducer";

export default combineReducers({
  userDataResponse: userData
});
