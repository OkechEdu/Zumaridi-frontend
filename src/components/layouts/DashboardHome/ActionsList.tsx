import { ZUimages } from "assets";
import { UserImgData } from "utils/userImg";
import { Link } from "react-router-dom";
import UserDateTimeDisplay from "./UserDateTimeDisplay";
import { meetingsList } from "utils";

const ActionsList = () => {
  return (
    <div className=" w-full">
      <div className="">
        <UserDateTimeDisplay />
      </div>
      <div className="lg:overflow-scroll lg:h-[56vh]">
        {meetingsList.map((meeting) => (
          <div
            key={meeting.id}
            className="h-48 w-full mb-4 rounded-2xl bg-green-100 p-8 flex justify-between"
          >
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <p className="font-bold text-[21px] text-black">{meeting.title}</p>
                <div className="flex gap-2 items-center">
                  <p className="text-gray-200 text-base">
                    <span>
                      <img />
                    </span>
                    {meeting.startTime} - {meeting.endTime}
                  </p>
                  <p className="text-gray-200 text-base">|</p>
                  <p className="text-gray-200 text-base">{meeting.meetingStatus}</p>
                </div>
              </div>

              <div className="flex">
                {UserImgData.length <= 4
                  ? UserImgData.map((item) => (
                      <img
                        key={item.id}
                        src={item.userImgUrl}
                        className="rounded-full h-10 w-10 -mr-2"
                      />
                    ))
                  : UserImgData.slice(0, 4).map((item) => (
                      <img
                        key={item.id}
                        src={item.userImgUrl}
                        className="rounded-full h-10 w-10 -mr-2"
                      />
                    ))}
                {UserImgData.length > 4 && (
                  <div className="bg-green rounded-full h-10 w-10 flex items-center justify-center text-white">
                    +{UserImgData.length - 4}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <img />
              <Link
                to=""
                className="font-normal text-[18px] bg-green rounded-lg py-2 px-4 text-white flex gap-2 items-center justify-center"
              >
                <span>
                  <img src={ZUimages.ZuPlay} />
                </span>{" "}
                Join Conference
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsList;
