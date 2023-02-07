import axios from "axios";
import ApiEndpoints from "./apiEndpoints.js";
import { LocalStorageKeys } from "./localStorageKeys";

const httpClient = (contentType) => {
  // Create intance
  const instance = axios.create({
    baseURL: ApiEndpoints.baseURL,
    headers: {
      "Content-Type": contentType ?? "application/json",
    },
    validateStatus: function (status) {
      return status < 500;
    },
  });

  //   Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem(LocalStorageKeys.userToken);
    if (config.headers)
      config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  return instance;
};

export default httpClient;
