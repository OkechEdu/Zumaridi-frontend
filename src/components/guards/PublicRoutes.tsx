import { useAppSelector } from "hooks";
import { DASHBOARD } from "routes/CONSTANTS";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to={DASHBOARD} replace /> : <Outlet />;
};

export default PublicRoutes;
