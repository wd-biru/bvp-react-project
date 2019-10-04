import axios from "axios";

const apiURL = "https://apiv2.bossvideoplayer.com/api";

const exportNewtowrk = axios.create({
  baseURL: apiURL
});

exportNewtowrk.all = axios.all;

export default exportNewtowrk;
