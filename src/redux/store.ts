import { configureStore } from "@reduxjs/toolkit";
import reducer from "redux/slices";

export const store = configureStore({
  reducer,
  devTools: true
});
