import React from "react";
import { render } from "@testing-library/react";
import Legend from "../components/Legend";

describe("Legend", () => {
  const setUp = () => {
    const { asFragment, getByRole } = render(<Legend />);

    return {
      asFragment: asFragment(),
      greenMarker: getByRole("img", { name: "green" }),
      redMarker: getByRole("img", { name: "red" }),
    };
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  it("to match the Legend snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders correctly", () => {
    expect(renderedComponent.greenMarker).toHaveAttribute("src");
    expect(renderedComponent.greenMarker).toHaveAttribute("alt");
    expect(renderedComponent.greenMarker).toHaveClass("icon");

    expect(renderedComponent.redMarker).toHaveAttribute("src");
    expect(renderedComponent.redMarker).toHaveAttribute("alt");
    expect(renderedComponent.redMarker).toHaveClass("icon");
  });
});
