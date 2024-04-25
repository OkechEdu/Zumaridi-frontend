import { ZUicons, ZUimages } from "assets";
import { meetingModalEnum } from "./enums";

export const meetingActions = [
  {
    id: meetingModalEnum.INSTANT,
    icon: ZUicons.video,
    task: "New Meeting",
    description: "Set-up your meeting",
    backgroundColor: "bg-green",
    buttonSyle:
      "w-12 h-12 rounded-lg border-[0.5px] border-green-400 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500"
  },
  {
    id: meetingModalEnum.JOIN,
    icon: ZUimages.ZuPlus,
    task: "Join Meeting",
    description: "Via invitation Link",
    backgroundColor: "bg-bluebg",
    buttonSyle:
      "w-12 h-12 rounded-lg border-[0.5px] border-[#5ca0f3] flex items-center justify-center bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
  },
  {
    id: meetingModalEnum.LATER,
    icon: ZUicons.calendarplus,
    task: "Schedule for Later",
    description: "Plan your meetings",
    backgroundColor: "bg-bluebg",
    buttonSyle:
      "w-12 h-12 rounded-lg border-[0.5px] border-[#5ca0f3] flex items-center justify-center bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
  },
  {
    id: meetingModalEnum.LINK,
    icon: ZUicons.link,
    task: "Get A Meeting Link",
    description: "For instant meeting",
    backgroundColor: "bg-bluebg",
    buttonSyle:
      "w-12 h-12 rounded-lg border-[0.5px] border-[#5ca0f3] flex items-center justify-center bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
  }
];
