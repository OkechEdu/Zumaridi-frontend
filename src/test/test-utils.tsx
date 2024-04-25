/* eslint-disable import/export */
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render as rtlRender } from "@testing-library/react";

import { store } from "redux/store";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const render = (ui: any, { ...options } = {}) => {
  const Wrapper = ({ children }: Props) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
// override React Testing Library's render with our own
export { render };
