export const folderDataConsts = {
  CREATE_FOLDER_DATA_REQUEST: "CREATE_FOLDER_DATA_REQUEST",
  CREATE_FOLDER_DATA_SUCCESS: "CREATE_FOLDER_DATA_SUCCESS",
  CREATE_FOLDER_DATA_FAIL: "CREATE_FOLDER_DATA_FAIL",
  GET_FOLDER_DATA_REQUEST: "GET_FOLDER_DATA_REQUEST",
  GET_FOLDER_DATA_SUCCESS: "GET_FOLDER_DATA_SUCCESS",
  GET_FOLDER_DATA_FAIL: "GET_FOLDER_DATA_FAIL",
  GET_UPLOAD_FOLDER_DATA_REQUEST: "GET_UPLOAD_FOLDER_DATA_REQUEST",
  GET_UPLOAD_FOLDER_DATA_SUCCESS: "GET_UPLOAD_FOLDER_DATA_SUCCESS",
  GET_UPLOAD_FOLDER_DATA_FAIL: "GET_UPLOAD_FOLDER_DATA_FAIL",
  GET_FOLDER_FILE_DATA_REQUEST: "GET_FOLDER_FILE_DATA_REQUEST",
  GET_FOLDER_FILE_DATA_SUCCESS: "GET_FOLDER_FILE_DATA_SUCCESS",
  GET_FOLDER_FILE_DATA_FAIL: "GET_FOLDER_FILE_DATA_FAIL",
  GET_FOLDER_FILE_PROGRESS: "GET_FOLDER_FILE_PROGRESS"
};

export function createFolderData(data) {
  return {
    type: folderDataConsts.CREATE_FOLDER_DATA_REQUEST,
    data
  };
}

export function getUserFolderData(data) {
  return {
    type: folderDataConsts.GET_FOLDER_DATA_REQUEST,
    data
  };
}

export function getUploadFolderData(data) {
  return {
    type: folderDataConsts.GET_UPLOAD_FOLDER_DATA_REQUEST,
    data
  };
}
export function resetLoader(data) {
  return {
    type: folderDataConsts.GET_FOLDER_FILE_PROGRESS,
    data
  };
}

export function getUploadFolderFileData(data) {
  return {
    type: folderDataConsts.GET_FOLDER_FILE_DATA_REQUEST,
    data
  };
}
