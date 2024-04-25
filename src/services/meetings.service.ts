import { CREATE_NEW_MEETING } from "./CONSTANTS";
import fetchInstance from "./utils/FetchInterceptor";

export const createMeeting = async (meetingParams: any) => {
  try {
    const response = await fetchInstance({
      url: CREATE_NEW_MEETING,
      method: "post",
      data: meetingParams
    });
    return response;
  } catch (err) {
    return err;
  }
};
