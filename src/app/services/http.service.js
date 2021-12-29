import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import configFile from "../config.json";

const errorsMsg = {
  404: "Page or filter results not found",
  default: "Somthing was wrong. Try it later",
};

axios.interceptors.request.use(
  function (config) {
    if (configFile.isFireBase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
function transormData(data) {
  return data
    ? Object.keys(data).map((key) => ({
        ...data[key],
      }))
    : [];
}
axios.interceptors.response.use(
  (res) => {
    if (configFile.isFireBase) {
      res.data = { content: transormData(res.data) };
    }
    return res;
  },
  function (error) {
    const errorMsg = Object.keys(errorsMsg).find(
      (errorCode) => +errorCode === error.response.status
    );
    toast.error(errorsMsg ? errorsMsg[errorMsg] : errorsMsg.default);

    return Promise.reject(error);
  }
);
const httpService = {
  get: axios.get,
  getAll: axios.all,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default httpService;
