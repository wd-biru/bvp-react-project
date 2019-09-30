import userDataConsts from "./loginActionConstants";

export function fetchUserData(data) {
  return {
    type: userDataConsts.USER_DATA_REQUEST,
    data
  };
}
