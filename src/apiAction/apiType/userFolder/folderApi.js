import util from "../../axios/utility";

export function getFolderData(data) {
  const reqHeaders = { "Content-Type": "" };
  return util.networkMain
    .post("/createFolder", data, { headers: { "Content-Type": "" } })
    .then(res => {
      return res;
    })
    .catch(err => err);
}

export function getUserFolderData(data) {
  return util.networkMain
    .get("/getfolder", data)
    .then(res => {
      return res;
    })
    .catch(err => err);
}

export function getUserFolderFilesData(data) {
  return util.networkMain
    .post("/project", data)
    .then(res => {
      return res;
    })
    .catch(err => err);
}

export function uploadUserFolderData(data) {
  return util.networkMain
    .post("/uploadimage", data, {
      headers: { "Content-Type": "multipart/form-data" }
    })
    .then(res => {
      return res;
    })
    .catch(err => err);
}
