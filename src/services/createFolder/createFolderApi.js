import coreUtil from "../../core/coreUtility";

export function getFolderData(data) {
  return coreUtil.NetworkManager.post("/createFolder", data)
    .then(res => {
      return res.data;
    })
    .catch(err => err);
}
