import { combineReducers } from "@reduxjs/toolkit";

import auth from "./auth.slice";
import image from "./image.slice";
import message from "./message.slice";
import organization from "./organization.slice";

const rootReducer = combineReducers({
  auth,
  image,
  message,
  organization
});

export default rootReducer;
