import { Actions, ActionsList } from "components/layouts/DashboardHome";

const DashBoardHomeView = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/5">
        <Actions />
      </div>
      <div className="w-full lg:w-3/5">
        <ActionsList />
      </div>
    </div>
  );
};

export default DashBoardHomeView;
