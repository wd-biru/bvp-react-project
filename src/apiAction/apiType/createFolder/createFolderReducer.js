import { createFolderDataConsts } from "./createFolderActions";

const initialState = {
  folderData: null
};

export default function folderReducer(state = initialState, action) {
  switch (action.type) {
    case createFolderDataConsts.CREATE_FOLDER_DATA_SUCCESS:
      return {
        ...state,
        folderData: action.payload
      };

    case createFolderDataConsts.CREATE_FOLDER_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
        folderData: null
      };

    default:
      return state;
  }
}
