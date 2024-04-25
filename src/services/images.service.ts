import axios from "axios";
import FormData from "form-data";

import env from "configs";
import { UPLOAD_IMAGE } from "./CONSTANTS";

export const uploadImage = async (image: any) => {
  const formdata = new FormData();
  formdata.append("image", image);

  const response = await axios.post(`${env.API_BASE_URL}${UPLOAD_IMAGE}`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response.data;
};

export const getImage = async (id: string) => {
  const response = await axios.get(`${env.API_BASE_URL}${UPLOAD_IMAGE}/${id}`);
  return response.data;
};

export const updateImage = async (id: string, image: any) => {
  const formdata = new FormData();
  formdata.append("image", image);

  const response = await axios.patch(`${env.API_BASE_URL}${UPLOAD_IMAGE}/${id}`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response.data;
};

export const deleteImage = async (id: string) => {
  const response = await axios.delete(`${env.API_BASE_URL}${UPLOAD_IMAGE}/${id}`);
  return response.data;
};
