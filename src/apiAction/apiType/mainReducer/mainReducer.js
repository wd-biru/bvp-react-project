import { combineReducers } from "redux";
import userData from "../login/loginReducer";
import folderData from "../userFolder/folderReducer";
import controlReducer from "../../Player/ControlReducer";
import alertReducer from '../../Alert/AlertReducer';

export default combineReducers({
  userDataResponse: userData,
  folderData,
  controlReducer,
  alertReducer
});
