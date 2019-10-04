import { all } from "redux-saga/effects";

import { fetchUserDataSaga } from "./login/loginSaga";
import { fetchFolderDataSaga } from "./createFolder/createFolderSaga";

function* rootSaga() {
  yield all([fetchUserDataSaga(), fetchFolderDataSaga()]);
}

export default rootSaga;
