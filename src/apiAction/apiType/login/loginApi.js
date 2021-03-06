import util from "../../axios/utility";

export function getUserData(data) {
  return util.networkMain
    .post("/login", data)
    .then(res => {
      const response = {
        data: res.data
      };
      localStorage.setItem("userToken", response.data.success.token);
      localStorage.setItem("userId", response.data.success.id);
      return response;
    })
    .catch(err => err);
}

export function createforgetPwd(data, actionType) {
  return util.networkMain
    .post(`/password/${actionType.action}`, data)
    .then(res => {
      return res.data;
    })
    .catch(err => err);
}
