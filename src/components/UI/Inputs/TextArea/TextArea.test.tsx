import { describe, expect, it, vi } from "vitest";
import * as formik from "formik";
import { Form, Formik, useField } from "formik";
import { appRender } from "../../../../test/customRender.tsx";
import { screen } from "@testing-library/react";
import { TextArea } from "./TextArea.tsx";

vi.mock("formik", async (importOriginal) => {
  const actual: typeof formik = await importOriginal(); // Import then override

  return {
    ...actual,
    useField: vi.fn().mockReturnValue([
      {
        name: "testInput",
        value: "",
        onChange: vi.fn(),
        onBlur: vi.fn(),
      },
      {
        touched: false,
        error: "",
      },
      {
        setValue: vi.fn(),
        setTouched: vi.fn(),
      },
    ]),
  };
});

describe("TextArea", () => {
  // Reset the mock implementation if needed

  it("renders correctly with label", () => {
    appRender(
      <Formik initialValues={{ testInput: "" }} onSubmit={vi.fn()}>
        <Form>
          <TextArea name="testInput" label="Test Input" />
        </Form>
      </Formik>,
    );
    expect(screen.getByLabelText(/test input/i)).toBeInTheDocument();
  });

  it("displays error message when field is touched and has an error", () => {
    // Override the mock to return an error

    vi.mocked(useField).mockReturnValueOnce([
      {
        value: undefined,
        name: "",
        onChange: vi.fn(),
        onBlur: vi.fn(),
      },
      {
        touched: true,
        error: "Test error",
        value: undefined,
        initialTouched: false,
      },
      {
        setValue: function (): Promise<void | formik.FormikErrors<unknown>> {
          throw new Error("Function not implemented.");
        },
        setTouched: function (): Promise<void | formik.FormikErrors<unknown>> {
          throw new Error("Function not implemented.");
        },
        setError: function (): void {
          throw new Error("Function not implemented.");
        },
      },
    ]);

    appRender(
      <Formik initialValues={{ testInput: "" }} onSubmit={vi.fn()}>
        <Form>
          <TextArea name="testInput" label="Test Input" />
        </Form>
      </Formik>,
    );

    expect(screen.getByText(/test error/i)).toBeInTheDocument();
  });
});
