import util from "../../axios/utility";

export function getFolderData(data) {
  return util.networkMain
    .post("/createFolder", data)
    .then(res => {
      return res;
    })
    .catch(err => err);
}
