import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../store";

const store = setupStore();

export const appRender = (children: React.ReactNode) => {
  return render(
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>,
  );
};
