import { all } from "redux-saga/effects";

import { fetchUserDataSaga, createPwdSaga } from "./login/loginSaga";
import {
  fetchFolderDataSaga,
  fetchUserFolderDataSaga,
  fetchUploadFolderDataSaga,
  fetchFolderFileDataSaga,
  fetchFolderMoveDataSaga
} from "./userFolder/folderSaga";

function* rootSaga() {
  yield all([
    fetchUserDataSaga(),
    fetchFolderDataSaga(),
    fetchUserFolderDataSaga(),
    fetchUploadFolderDataSaga(),
    fetchFolderFileDataSaga(),
    fetchFolderMoveDataSaga(),
    createPwdSaga()
  ]);
}

export default rootSaga;
