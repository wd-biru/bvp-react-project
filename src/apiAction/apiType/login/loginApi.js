import util from "../../axios/utility";

export function getUserData(data) {
  return util.networkMain
    .post("/login", data)
    .then(res => {
      const response = {
        data: res.data
      };
      localStorage.setItem("userToken", response.data.success.token);
      return response;
    })
    .catch(err => err);
}
