import { folderDataConsts } from "./folderActions";

const initialState = {
  folderData: null,
  userFolderData: null,
  uploadFolderData: null,
  userFileData: null,
  fileProgressData:0
};

export default function folderReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case folderDataConsts.CREATE_FOLDER_DATA_SUCCESS:
      return {
        ...state,
        folderData: action.payload
      };

    case folderDataConsts.CREATE_FOLDER_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        folderData: null
      };
    case folderDataConsts.GET_FOLDER_DATA_SUCCESS:
      return {
        ...state,
        userFolderData: action.payload.data
      };

    case folderDataConsts.GET_FOLDER_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        userFolderData: null
      };
    case folderDataConsts.GET_UPLOAD_FOLDER_DATA_SUCCESS:
      return {
        ...state,
        uploadFolderData: action.payload.data
      };

    case folderDataConsts.GET_UPLOAD_FOLDER_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        uploadFolderData: null
      };
    case folderDataConsts.GET_FOLDER_FILE_DATA_SUCCESS:
      return {
        ...state,
        userFileData: action.payload.data
      };

    case folderDataConsts.GET_FOLDER_FILE_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        userFileData: null
      };
      case folderDataConsts.GET_FOLDER_FILE_PROGRESS:
      return {
        ...state,
        fileProgressData: action.payload     
      };
      
    default:
      return state;
  }
}
