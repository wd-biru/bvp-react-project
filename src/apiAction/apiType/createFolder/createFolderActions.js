import createFolderDataConsts from "./createFolderActionConstants";

export function createFolderData(data) {
  return {
    type: createFolderDataConsts.CREATE_FOLDER_DATA_REQUEST,
    data
  };
}
