import { folderDataConsts } from "../userFolder/folderActions";
import { call, put, takeLatest,take } from "redux-saga/effects";
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
  debugger
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
   
  const channel = yield call(uploadUserFolderData,action.data);
 
  while (true) {
    const { progressPercentage = 0, err, res } = yield take(channel);
    if (err) {
      console.log(err)
      yield put({
              payload: err,
              type: folderDataConsts.GET_FOLDER_FILE_DATA_FAIL
            });
        return;
    }
    if (res) {
      console.log(res)
        
        yield put({
          payload: res,
          type: folderDataConsts.GET_UPLOAD_FOLDER_DATA_SUCCESS
        });
    return;
        
    }
    yield put({
      payload: progressPercentage,
      type: folderDataConsts.GET_FOLDER_FILE_PROGRESS
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
