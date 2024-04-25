import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "types";
import type { TypedUseSelectorHook } from "react-redux";

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from "./use-auth";
export * from "./use-query";
export * from "./use-scroll";
