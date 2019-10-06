import { folderDataConsts } from "./folderActions";

const initialState = {
  folderData: null,
  userFolderData: null
};

export default function folderReducer(state = initialState, action) {
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

    default:
      return state;
  }
}
