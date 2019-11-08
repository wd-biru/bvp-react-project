export const userDataConsts = {
  USER_DATA_REQUEST: "USER_DATA_REQUEST",
  USER_DATA_SUCCESS: "USER_DATA_SUCCESS",
  USER_DATA_FAIL: "USER_DATA_FAIL",
  CREATE_PWD_REQUEST: "CREATE_PWD_REQUEST",
  CREATE_PWD_SUCCESS: "CREATE_PWD_SUCCESS",
  CREATE_PWD_FAIL: "CREATE_PWD_FAIL"
};

export function fetchUserData(data) {
  return {
    type: userDataConsts.USER_DATA_REQUEST,
    data
  };
}

export function createUserPwd(data, actionType) {
  return {
    type: userDataConsts.CREATE_PWD_REQUEST,
    data,
    actionType
  };
}

export default {
  userDataConsts
};
