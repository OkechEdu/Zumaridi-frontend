import { env } from "configs/environment.config";
import { IRefer } from "pages/ReferAFriend/ReferAFriendView";
import { GET_USER, ZUMARIDI_USER_DATA } from "./CONSTANTS";
import fetch from "./utils/FetchInterceptor";

export const userData = JSON.parse(localStorage.getItem(ZUMARIDI_USER_DATA) as string)?.user;
export const getUserById = async (id: string) => {
  try {
    const data = await fetch({
      url: `${GET_USER}/${id}`,
      method: "get"
    });
    return data;
  } catch (err) {
    return err;
  }
};

export const sendReferral = async (body: IRefer) => {
  const id = userData?._id as string;
  return await fetch.post(`${env.API_BASE_URL}/users/${id}/invite`, body);
};
