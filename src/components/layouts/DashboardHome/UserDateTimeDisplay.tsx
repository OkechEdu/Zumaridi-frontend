import { useEffect, useState, useMemo } from "react";
import { user, userbg } from "assets/images";

const UserDateTimeDisplay = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = useMemo(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const suffix = getSuffix(dayOfMonth);
    return `${dayOfWeek}, ${dayOfMonth}${suffix} ${month}, ${date.getFullYear()}`;
  }, [date]);

  const formattedTime = useMemo(() => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes}`;
  }, [date]);

  return (
    <div
      className="h-48 w-full mb-4 rounded-2xl  text-white"
      style={{ backgroundImage: `url(${userbg})` }}
    >
      <div className="bg-black-100 bg-opacity-70 w-full p-8 rounded-2xl h-full flex justify-between items-center">
        <div>
          <p className="font-bold text-lg">Welcome user</p>
          <p className="font-bold text-[61px]">{formattedTime}</p>
          <p className="text-[18px] font-normal">{formattedDate}</p>
        </div>
        <div className="h-28 w-28 rounded-full bg-green-100 flex items-center justify-center">
          <img src={user} className="h-28 w-28" />
        </div>
      </div>
    </div>
  );
};

const getSuffix = (dayOfMonth: number) => {
  if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
    return "st";
  } else if (dayOfMonth === 2 || dayOfMonth === 22) {
    return "nd";
  } else if (dayOfMonth === 3 || dayOfMonth === 23) {
    return "rd";
  } else {
    return "th";
  }
};

export default UserDateTimeDisplay;
