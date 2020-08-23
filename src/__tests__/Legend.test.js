import React from "react";
import { render } from "@testing-library/react";
import Legend from "../components/Legend";

describe("Legend", () => {
  const setUp = () => {
    const { asFragment, getByRole } = render(<Legend />);

    return {
      asFragment: asFragment(),
      legend: getByRole("heading", { name: "Legend" }),
      greenMarker: getByRole("img", { name: "green" }),
      yellowMarker: getByRole("img", { name: "yellow" }),
      purpleMarker: getByRole("img", { name: "purple" }),
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
    expect(renderedComponent.legend).toHaveTextContent("Legend");

    expect(renderedComponent.greenMarker).toHaveAttribute("src");
    expect(renderedComponent.greenMarker).toHaveAttribute("alt");
    expect(renderedComponent.greenMarker).toHaveClass("icon");

    expect(renderedComponent.yellowMarker).toHaveAttribute("src");
    expect(renderedComponent.yellowMarker).toHaveAttribute("alt");
    expect(renderedComponent.yellowMarker).toHaveClass("icon");

    expect(renderedComponent.purpleMarker).toHaveAttribute("src");
    expect(renderedComponent.purpleMarker).toHaveAttribute("alt");
    expect(renderedComponent.purpleMarker).toHaveClass("icon");

    expect(renderedComponent.redMarker).toHaveAttribute("src");
    expect(renderedComponent.redMarker).toHaveAttribute("alt");
    expect(renderedComponent.redMarker).toHaveClass("icon");
  });
});
