import { ZUMARIDI_USER_DATA } from "./CONSTANTS";

interface IUser {
  accessToken?: string;
}

export default function authHeader() {
  const user: IUser = JSON.parse(localStorage.getItem(ZUMARIDI_USER_DATA) as string);
  if (user?.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
