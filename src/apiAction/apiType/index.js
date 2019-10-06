import { all } from "redux-saga/effects";

import { fetchUserDataSaga } from "./login/loginSaga";
import {
  fetchFolderDataSaga,
  fetchUserFolderDataSaga
} from "./userFolder/folderSaga";

function* rootSaga() {
  yield all([
    fetchUserDataSaga(),
    fetchFolderDataSaga(),
    fetchUserFolderDataSaga()
  ]);
}

export default rootSaga;
