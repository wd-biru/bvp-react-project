import NetworkManager from './index';
import ActivityActionInst from '../../action/ActivityAction';

function getUrl(config) {
  if (config.baseURL) {
    return config.url.replace(`${config.baseURL}/`, '');
  }
  return config.url;
}

const genAPIKey = request => `${request.method}_${getUrl(request)}`;

NetworkManager.$http.interceptors.request.use((request) => {
    const key = genAPIKey(request);
    ActivityActionInst.requestInitiated(key);
    return request;
}, error => {
  return { error };

});

NetworkManager.$http.interceptors.response.use((response) => {
const key = genAPIKey(response.config);
ActivityActionInst.requestFinished(key);
return response;
}, (error) => {
    const key = genAPIKey(error.config);
    ActivityActionInst.requestFinished(key);
    return Promise.reject(error);
});