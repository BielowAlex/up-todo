import { vi } from "vitest";
import { appRender } from "../../test/customRender.tsx";
import { screen } from "@testing-library/react";
import React from "react";
import { MainLayout } from "./MainLayout.tsx";

vi.mock("../../components", () => ({
  Header: () => <header>Mocked Header</header>,
  Footer: () => <footer>Mocked Footer</footer>,
}));

describe("MainLayout", () => {
  it("renders Header, Outlet, and Footer components", () => {
    const { container } = appRender(<MainLayout />);

    expect(screen.getByText("Mocked Header")).toBeInTheDocument();
    expect(screen.getByText("Mocked Footer")).toBeInTheDocument();

    expect(container.querySelector(".container")).toBeInTheDocument();
  });
});
