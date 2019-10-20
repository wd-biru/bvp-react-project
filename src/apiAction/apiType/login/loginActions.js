export const userDataConsts = {
  USER_DATA_REQUEST: "USER_DATA_REQUEST",
  USER_DATA_SUCCESS: "USER_DATA_SUCCESS",
  USER_DATA_FAIL: "USER_DATA_FAIL",
  USER_LOGOUTREQUEST: "USER_LOGOUTREQUEST",
  USER_LOGOUT: "USER_LOGOUT",
  
};

export function fetchUserData(data) {
  return {
    type: userDataConsts.USER_DATA_REQUEST,
    data
  };
}
export function logoutUser(data) {

  return {
    type: userDataConsts.USER_LOGOUTREQUEST,
    data
  };
}

export default {
  userDataConsts
};
