export const userDataConsts = {
  USER_DATA_REQUEST: "USER_DATA_REQUEST",
  USER_DATA_SUCCESS: "USER_DATA_SUCCESS",
  USER_DATA_FAIL: "USER_DATA_FAIL"
};

export function fetchUserData(data) {
  return {
    type: userDataConsts.USER_DATA_REQUEST,
    data
  };
}

export default {
  userDataConsts
};
