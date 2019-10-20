import { all } from "redux-saga/effects";

import { fetchUserDataSaga,logoutUserSaga } from "./login/loginSaga";
import {
  fetchFolderDataSaga,
  fetchUserFolderDataSaga,
  fetchUploadFolderDataSaga
} from "./userFolder/folderSaga";

function* rootSaga() {
  yield all([
    logoutUserSaga(),
    fetchUserDataSaga(),
    fetchFolderDataSaga(),
    fetchUserFolderDataSaga(),
    fetchUploadFolderDataSaga()

  ]);
}

export default rootSaga;
