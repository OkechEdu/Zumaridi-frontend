import axios from "axios";
import env from "configs";
import { logout } from "redux/slices/auth.slice";
import { store } from "redux/store";
import { LOGIN } from "routes/CONSTANTS";
import authHeader from "services/auth-header";
import { PUBLIC_REQUEST_KEY } from "services/CONSTANTS";
import { toast } from "react-toastify";

const service = axios.create({
  baseURL: env.API_BASE_URL,
  timeout: 60000
});

// API request interceptor

service.interceptors.request.use(
  (config: any): any => {
    const auth = authHeader();
    if (auth?.Authorization) {
      Object.assign(config.headers, auth);
    } else if (!config.headers[PUBLIC_REQUEST_KEY]) {
      void store.dispatch(logout());
    }
    return config;
  },
  (error) => {
    void Promise.reject(error);
  }
);

// API respone interceptor
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const notificationParam = {
      message: "",
      description: ""
    };

    // request happened and server responded

    if (error.response) {
      notificationParam.message = error.response.data.MESSAGE.toString();
      if (error.response.status === 401 || error.response.status === 403) {
        notificationParam.message = "Authentication Fail";
        notificationParam.description = "Please login again";
        localStorage.clear();
        window.location.href = LOGIN;
      }

      if (error.response.status === 404) {
        notificationParam.message = "Not Found";
      }

      if (error.response.status === 500) {
        notificationParam.message = "Internal Server Error";
      }

      if (error.response.status === 508) {
        notificationParam.message = "Time Out";
      }
      if (error.response.status === 422) {
        notificationParam.message = "Validation Error";
      }
      toast.dismiss();
      toast.error(notificationParam.message);
      return await Promise.reject(error.response.data);
    }
    return await Promise.reject(error);
  }
);
export default service;
