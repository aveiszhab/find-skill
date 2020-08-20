import React from "react";
import { render } from "@testing-library/react";
import Map from "../components/Map";

describe("Map", () => {
  it("renders correctly to match the Skills snapshot", () => {
    const { asFragment } = render(<Map />);

    expect(asFragment()).toMatchSnapshot();
  });
});
