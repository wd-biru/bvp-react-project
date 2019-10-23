import { folderDataConsts } from "../userFolder/folderActions";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getUserFolderData,
  getFolderData,
  uploadUserFolderData,
  getUserFolderFilesData
} from "../userFolder/folderApi";

export function* fetchFolderDataSaga() {
  yield takeLatest(
    folderDataConsts.CREATE_FOLDER_DATA_REQUEST,
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
      type: folderDataConsts.CREATE_FOLDER_DATA_SUCCESS
    });
  } else {
    yield put({
      payload: folderData,
      type: folderDataConsts.CREATE_FOLDER_DATA_FAIL
    });
  }
}

export function* fetchUserFolderDataSaga() {
  yield takeLatest(folderDataConsts.GET_FOLDER_DATA_REQUEST, userFolderData);
}

function* userFolderData(action) {
  const userfolderData = yield call(() => {
    return getUserFolderData(action.data);
  });
  if (!userfolderData.error) {
    yield put({
      payload: userfolderData,
      type: folderDataConsts.GET_FOLDER_DATA_SUCCESS
    });
  } else {
    yield put({
      payload: userfolderData,
      type: folderDataConsts.GET_FOLDER_DATA_FAIL
    });
  }
}

export function* fetchUploadFolderDataSaga() {
  yield takeLatest(
    folderDataConsts.GET_UPLOAD_FOLDER_DATA_REQUEST,
    uploadFolderData
  );
}

function* uploadFolderData(action) {
  const uploadfolderData = yield call(() => {
    return uploadUserFolderData(action.data);
  });
  if (!uploadfolderData.error) {
    yield put({
      payload: uploadfolderData,
      type: folderDataConsts.GET_UPLOAD_FOLDER_DATA_SUCCESS
    });
  } else {
    yield put({
      payload: uploadfolderData,
      type: folderDataConsts.GET_UPLOAD_FOLDER_DATA_FAIL
    });
  }
}

export function* fetchFolderFileDataSaga() {
  yield takeLatest(
    folderDataConsts.GET_FOLDER_FILE_DATA_REQUEST,
    folderFileData
  );
}

function* folderFileData(action) {
  const folderFile = yield call(() => {
    return getUserFolderFilesData(action.data);
  });
  if (!folderFile.error) {
    yield put({
      payload: folderFile,
      type: folderDataConsts.GET_FOLDER_FILE_DATA_SUCCESS
    });
  } else {
    yield put({
      payload: folderFile,
      type: folderDataConsts.GET_FOLDER_FILE_DATA_FAIL
    });
  }
}
