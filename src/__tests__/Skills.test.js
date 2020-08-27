import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Skills from "../components/Skills";

describe("Skills", () => {
  it("renders correctly to match the Skills snapshot", () => {
    const { asFragment } = render(
      <Router>
        <Skills />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
