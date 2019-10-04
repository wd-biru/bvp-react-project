export const createFolderDataConsts = {
  CREATE_FOLDER_DATA_REQUEST: "CREATE_FOLDER_DATA_REQUEST",
  CREATE_FOLDER_DATA_SUCCESS: "CREATE_FOLDER_DATA_SUCCESS",
  CREATE_FOLDER_DATA_FAIL: "CREATE_FOLDER_DATA_FAIL"
};

export function createFolderData(data) {
  return {
    type: createFolderDataConsts.CREATE_FOLDER_DATA_REQUEST,
    data
  };
}

export default {
  createFolderDataConsts
};
