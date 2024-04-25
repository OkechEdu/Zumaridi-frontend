import { Navbar } from "components";
import ErrorPageView from "./ErrorPageView";

export const ErrorPageContainer = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <Navbar transparent />
      </div>
      <ErrorPageView />
    </div>
  );
};
