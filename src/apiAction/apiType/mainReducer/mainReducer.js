import { combineReducers } from "redux";
import userData from "../login/loginReducer";
import folderData from "../userFolder/folderReducer";

export default combineReducers({
  userDataResponse: userData,
  folderData
});
