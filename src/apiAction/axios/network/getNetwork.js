import axios from "axios";

const apiURL = "http://54.234.72.4/api";

const exportNewtowrk = axios.create({
  baseURL: apiURL
});

exportNewtowrk.all = axios.all;

export default exportNewtowrk;
