import { Routes, Route } from "react-router-dom";

import {
  BroadcastChannel,
  Calender,
  Contact,
  DashboardHome,
  ErrorPage,
  ForgetPassword,
  Home,
  Pricing,
  Login,
  ReferAFriend,
  ResetPassword,
  ChangePassword,
  Settings,
  Signup,
  About,
  Terms,
  Privacy,
  SignupBusiness,
  SignupIndividual
} from "pages";
import {
  BROADCASTCHANNEL,
  CALENDER,
  CONTACT,
  ABOUT,
  DASHBOARD,
  FORGOT_PASSWORD,
  HOME,
  LOGIN,
  LOGIN_CONFIRM,
  REFER_A_FRIEND,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  SETTINGS,
  SIGNUP,
  TERMS,
  PRIVACY,
  PRICING,
  SIGNUP_INDIVIDUAL,
  SIGNUP_BUSINESS,
  SIGNUP_INVITE
} from "./CONSTANTS";

import type { FC } from "react";
import { ProtectedRoute, PublicRoute } from "components";

const RouterConfig: FC = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        <Route path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={PRIVACY} element={<Privacy />} />
        <Route path={TERMS} element={<Terms />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path={PRICING} element={<Pricing />} />
        <Route path="/" element={<PublicRoute />}>
          {/* Auth pages */}
          <Route path={LOGIN} element={<Login />} />
          <Route path={LOGIN_CONFIRM} element={<Login />} />
          <Route path={SIGNUP} element={<Signup />} />
          <Route path={SIGNUP_BUSINESS} element={<SignupBusiness />} />
          <Route path={SIGNUP_INDIVIDUAL} element={<SignupIndividual />} />
          <Route path={RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={FORGOT_PASSWORD} element={<ForgetPassword />} />
          <Route path={CHANGE_PASSWORD} element={<ChangePassword />} />
          <Route path={SIGNUP_INVITE} element={<SignupIndividual />} />
        </Route>
        {/* dashboard routes should be placed in here */}
        <Route>
          <Route path={DASHBOARD} element={<DashboardHome />}></Route>
          <Route path={BROADCASTCHANNEL} element={<BroadcastChannel />} />
          <Route path={CALENDER} element={<Calender />} />
          <Route path={SETTINGS} element={<Settings />} />
          <Route path={REFER_A_FRIEND} element={<ReferAFriend />} />
        </Route>

        <Route path="/" element={<ProtectedRoute navigate={SIGNUP} />}>
          {/* Protected routes should be placed in here */}
        </Route>

        {/* 404 page */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
