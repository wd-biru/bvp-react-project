import { combineReducers } from "redux";
import userData from "../login/loginReducer";
import folderData from "../userFolder/folderReducer";
import controlReducer from "../../Player/ControlReducer";
import alertReducer from '../../Alert/AlertReducer';
import saveReducer from '../../Alert/SaveReducer';
import actionPopupReducer from '../../../commonReducers/actionReducer';
import widgetPopupReducer from '../../WidgetPopup/WidgetPopupReducer';

export default combineReducers({
  userDataResponse: userData,
  folderData,
  controlReducer,
  alertReducer,
  saveReducer,
  actionPopupReducer,
  widgetPopupReducer
});
