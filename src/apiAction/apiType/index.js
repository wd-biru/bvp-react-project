import { all } from "redux-saga/effects";

import { fetchUserDataSaga } from "./login/loginSaga";
import {
  fetchFolderDataSaga,
  fetchUserFolderDataSaga,
  fetchUploadFolderDataSaga
} from "./userFolder/folderSaga";

function* rootSaga() {
  yield all([
    fetchUserDataSaga(),
    fetchFolderDataSaga(),
    fetchUserFolderDataSaga(),
    fetchUploadFolderDataSaga()
  ]);
}

export default rootSaga;
