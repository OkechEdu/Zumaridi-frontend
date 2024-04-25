import { store } from "redux/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface Option {
  value: string;
  title: string;
}

export interface Organization {
  id?: string;
  logo?: string;
  size?: number;
  name?: string;
  ownerId: string;
  address?: string;
  website?: string;
  country?: string;
  language?: string;
  industry?: string;
  phoneNumber?: string;
}
