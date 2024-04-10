import { describe, expect, it, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { Button } from "./Button";
import { appRender } from "../../../../test/customRender.tsx";

describe("Button", () => {
  it("renders with children", () => {
    appRender(<Button>Test Button</Button>);
    expect(
      screen.getByRole("button", { name: /test button/i }),
    ).toBeInTheDocument();
  });

  it("handles click event", () => {
    const handleClick = vi.fn();
    appRender(<Button handleClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    appRender(<Button disabled>Disabled Button</Button>);

    expect(
      screen.getByRole("button", { name: /disabled button/i }),
    ).toBeDisabled();
  });

  it("applies custom className when provided", () => {
    const { container } = appRender(
      <Button className="custom-class">Test</Button>,
    );

    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });

  it("has the correct type attribute when provided", () => {
    appRender(<Button type="submit">Submit</Button>);

    expect(screen.getByRole("button", { name: /submit/i })).toHaveAttribute(
      "type",
      "submit",
    );
  });
});
