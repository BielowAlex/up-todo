import { describe, expect, it, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { LinkButton } from "./LinkButton";
import { appRender } from "../../../../test/customRender.tsx";

describe("LinkButton", () => {
  it("renders correctly", () => {
    appRender(<LinkButton to="/test">Test Button</LinkButton>);
    expect(
      screen.getByRole("link", { name: /test button/i }),
    ).toBeInTheDocument();
  });

  it("calls handleClick when clicked", async () => {
    const handleClick = vi.fn();
    appRender(
      <LinkButton to="/test" handleClick={handleClick}>
        Click Me
      </LinkButton>,
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalled();
  });

  it("applies custom className when provided", () => {
    const { container } = appRender(
      <LinkButton to="/test" className="custom-class">
        Test
      </LinkButton>,
    );

    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });

  it("has the correct href attribute", () => {
    appRender(<LinkButton to="/test-path">Navigate</LinkButton>);

    expect(screen.getByRole("link", { name: /navigate/i })).toHaveAttribute(
      "href",
      "/test-path",
    );
  });
});
