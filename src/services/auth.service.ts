// eslint-disable-next-line no-restricted-imports
import { CHANGE_PASSWORD } from "./../routes/CONSTANTS";
import axios from "axios";

import env from "configs";
import authHeader from "./auth-header";
import {
  FORGOT_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS_URL,
  LOG_OUT,
  REGISTER,
  RESET_PASSWORD,
  ZUMARIDI_USER_DATA
} from "./CONSTANTS";

export const signin = async ({ email, password }: { email: string; password: string }) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true
  };
  const configs = {
    headers,
    withCredentials: true
  };
  return await axios
    .post(
      `${env.API_BASE_URL}/${LOGIN}`,
      {
        username: email,
        password
      },
      configs
    )
    .then((res) => {
      const data = res.data;
      if (data?.DATA?.accessToken) {
        localStorage.setItem(ZUMARIDI_USER_DATA, JSON.stringify(data.DATA));
      }
      return data;
    });
};

export const loginSuccess = async () => {
  try {
    const config = {
      url: `${env.API_BASE_URL}/${LOGIN_SUCCESS_URL}`,
      method: "get",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    };
    const response = await axios(config);
    if (response.data?.DATA?.accessToken) {
      localStorage.setItem(ZUMARIDI_USER_DATA, JSON.stringify(response.data.DATA));
    }
    return response.data;
  } catch (err) {
    return err;
  }
};

export const register = async (details: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  refId?: string | null;
}) => {
  const response = await axios.post(`${env.API_BASE_URL}/${REGISTER}`, details);
  return response.data;
};

export const registerBusiness = async (details: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  refId?: string;
}) => {
  const response = await axios.post(`${env.API_BASE_URL}/${REGISTER}?type=business`, details);
  return response.data;
};

export const confirmAccount = async (confirmationCode: string) => {
  const response = await axios.get(env.API_BASE_URL + `/auth/confirm/${confirmationCode}`);
  return response.data;
};

export const logout = async () => {
  return await axios
    .get(`${env.API_BASE_URL}/${LOG_OUT}`, { headers: authHeader() })
    .finally(() => {
      localStorage.removeItem(ZUMARIDI_USER_DATA);
      window.location.reload();
    });
};

export const forgotPassword = async (details: { email: string }) => {
  const response = await axios.post(`${env.API_BASE_URL}/${FORGOT_PASSWORD}`, details);
  return response.data;
};

export const resetPassword = async (details: { token?: string; password: string }) => {
  const response = await axios.patch(`${env.API_BASE_URL}/${RESET_PASSWORD}`, details);
  return response.data;
};

export const changePassword = async (details: { token?: string; oldPassword: string }) => {
  const response = await axios.patch(`${env.API_BASE_URL}/${CHANGE_PASSWORD}`, details);
  return response.data;
};
