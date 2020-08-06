import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders correctly to match the Alert snapshot", () => {
    const { asFragment } = render(<Alert />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("displays an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    expect(getByText(/error/i).textContent).toContain("Error");
    expect(asFragment()).toMatchSnapshot();
  });
  it("displays a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!" success />
    );
    expect(getByText(/success/i).textContent).toContain("Success");
    expect(asFragment()).toMatchSnapshot();
  });
  it("does not render component if there is no message", () => {
    const { asFragment } = render(<Alert message="" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
