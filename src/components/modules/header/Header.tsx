import { bell, search, user } from "assets/images";

const Header = () => {
  return (
    <div className="flex gap-6 pr-16 w-full items-center justify-end h-24 bg-white">
      <div className="p-3 rounded-full shadow-md">
        <img src={search} />
      </div>
      <div>
        <img src={bell} />
      </div>
      <div>
        <img src={user} className="rounded-full h-[72px] w-[72px]" />
      </div>
    </div>
  );
};

export default Header;
