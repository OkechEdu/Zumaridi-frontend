/* eslint-disable camelcase */
import { UPDATE_USER_PROFILE, UPLOAD_FILE } from "./CONSTANTS";
import fetch from "./utils/FetchInterceptor";

export const updateUserProfile = async (userId: string, info: any) => {
  try {
    const data = await fetch({
      url: `${UPDATE_USER_PROFILE}/${userId}`,
      method: "patch",
      headers: {
        "Content-Type": "application/json"
      },
      data: info
    });
    return data;
  } catch (err) {
    return err;
  }
};

export const updateProfilePicture = async (formadata: any) => {
  try {
    const data = await fetch({
      url: UPLOAD_FILE,
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: formadata
    });
    return data;
  } catch (err) {
    return err;
  }
};

export const updatePassword = async (
  userId: string,
  currentPassword: string,
  newPassword: string,
  confirmPassword: string
) => {
  try {
    const data = await fetch({
      url: `user/${userId}/password-update`,
      method: "patch",
      headers: {
        "Content-Type": "application/json"
      },
      data: { currentPassword, newPassword, confirmPassword }
    });
    return data;
  } catch (err) {
    return err;
  }
};
