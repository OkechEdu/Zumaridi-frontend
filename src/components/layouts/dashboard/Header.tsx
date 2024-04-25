import { bell, search, user } from "assets/images";

const Header = () => {
  return (
    <div className="w-full h-[10vh] px-5 md:px-10 flex items-center justify-between bg-white">
      <div className="">Logo</div>

      <div className="flex items-center space-x-3 md:space-x-5">
        <div className="p-3 rounded-full shadow-md">
          <img src={search} />
        </div>
        <div>
          <img src={bell} />
        </div>
        <div>
          <img src={user} className="rounded-full w-10 h-10 md:w-14 md:h-14" />
        </div>
      </div>
    </div>
  );
};

export default Header;
