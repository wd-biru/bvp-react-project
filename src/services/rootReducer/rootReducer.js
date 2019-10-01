import { combineReducers } from "redux";
import userData from "../login/loginReducer";
import folderData from "../createFolder/createFolderReducer";

export default combineReducers({
  userDataResponse: userData,
  folderDetails: folderData
});
