import { all } from "redux-saga/effects";

import { fetchUserDataSaga } from "./loginSaga";
import { fetchFolderDataSaga } from "./createFolderSaga";

function* rootSaga() {
  yield all([fetchUserDataSaga(), fetchFolderDataSaga()]);
}

export default rootSaga;
