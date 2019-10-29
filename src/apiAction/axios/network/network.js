import exportNewtowrk from "./getNetwork";

class networkType {
  constructor() {
    this.$http = exportNewtowrk;
  }

  get(path, params = {}, reqHeaders = {}) {
    return this.$http.get(path, { params: params, headers: reqHeaders });
  }

  post(path, data, reqHeaders = {}) {
    return this.$http.post(path, data, { headers: reqHeaders });
  }
  postWithProgress(path, data, reqHeaders = {},progress={}) {
    return this.$http.post(path, data, { headers: reqHeaders,onUploadProgress:progress });
  }
}
export default networkType;
