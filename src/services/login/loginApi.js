import coreUtil from "../../core/coreUtility";

export function getUserData(data) {
  return coreUtil.NetworkManager.post("/login", data)
    .then(res => {
      const response = {
        data: res.data
      };
      localStorage.setItem("userToken", response.data.success.token);
      return response;
    })
    .catch(err => err);
}
