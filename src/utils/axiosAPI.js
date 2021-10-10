import axios from "axios";

const baseURL = "http://localhost:8080/rocon"; //process.env.REACT_BACK_END_API_BASE_URL;

/**
 * @description axios instance for ajax requests
 */

let token_info = "Bearer " + localStorage.getItem("accessToken");
let client = axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
    "Access-Control-Allow-Credentials": "true",
  },
});

client.interceptors.request.use(
  (config) => {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("accessToken");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
  * @description if any of the API gets 401 status code, this method 
   calls getAuthToken method to renew accessToken
  * updates the error configuration and retries all failed requests 
  again
*/

client.interceptors.response.use(undefined, (err) => {
  const error = err.response;
  // if error is 401
  if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
    // update the error config with new token
    error.config.__isRetryRequest = true;
    error.config.headers.Authorization =
      "Bearer " + localStorage.getItem("accessToken");
    return client(error.config);
  }
});

/**
 * @description wrapper for making ajax requests
 * @param {object} object with method,url,data etc.
 */

const request = function (options) {
  const onSuccess = function (response) {
    return response.data;
  };
  const onError = function (error) {
    //console.error('Request Failed:', error.config);
    console.error("Error" + error);
    if (error.response) {
      //console.error('Status:',  error.response.status);
      //console.error('Data:',    error.response.data);
      //console.error('Headers:', error.response.headers);
    } else {
      console.error("Error Message:", error.message);
    }
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;