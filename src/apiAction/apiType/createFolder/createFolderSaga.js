import { createFolderDataConsts } from "../createFolder/createFolderActions";
import { call, put, takeLatest } from "redux-saga/effects";
import { getFolderData } from "../createFolder/createFolderApi";

export function* fetchFolderDataSaga() {
  yield takeLatest(
    createFolderDataConsts.CREATE_FOLDER_DATA_REQUEST,
    createFolderData
  );
}

function* createFolderData(action) {
  const folderData = yield call(() => {
    return getFolderData(action.data);
  });
  if (!folderData.error) {
    yield put({
      payload: folderData,
      type: createFolderDataConsts.CREATE_FOLDER_DATA_SUCCESS
    });
  } else {
    yield put({
      payload: folderData,
      type: createFolderDataConsts.CREATE_FOLDER_DATA_FAIL
    });
  }
}
