import { all } from "redux-saga/effects";

import { fetchUserDataSaga } from "./loginSaga";

function* rootSaga() {
  yield all([fetchUserDataSaga()]);
}

export default rootSaga;
