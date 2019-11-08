import { userDataConsts } from "../login/loginActions";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUserData, createforgetPwd } from "../login/loginApi";

export function* fetchUserDataSaga() {
  yield takeLatest(userDataConsts.USER_DATA_REQUEST, fetchUserData);
}

function* fetchUserData(action) {
  const userData = yield call(() => {
    return getUserData(action.data);
  });
  if (userData.data && userData.data.success) {
    yield put({
      payload: userData.data,
      type: userDataConsts.USER_DATA_SUCCESS
    });
  } else {
    yield put({
      payload: userData.response,
      type: userDataConsts.USER_DATA_FAIL
    });
  }
}

export function* createPwdSaga() {
  yield takeLatest(userDataConsts.CREATE_PWD_REQUEST, createPwd);
}

function* createPwd(action) {
  const createPassword = yield call(() => {
    return createforgetPwd(action.data, action.actionType);
  });
  if (!createPassword.error) {
    yield put({
      payload: createPassword,
      type: userDataConsts.CREATE_PWD_SUCCESS
    });
  } else {
    yield put({
      payload: createPassword,
      type: userDataConsts.CREATE_PWD_FAIL
    });
  }
}
