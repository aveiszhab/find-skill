import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  const setUp = () => {
    const { asFragment, getByRole } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    return {
      asFragment: asFragment(),
      linkToSkills: getByRole("link", {
        name: /view skill/i,
      }),
      linkToAddSkill: getByRole("link", {
        name: /manage a skill/i,
      }),
    };
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  it("renders correctly to match the NavBar snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders skills link properly", () => {
    expect(renderedComponent.linkToSkills).toHaveAttribute("href", "/");
  });

  it("renders add skill link properly", () => {
    expect(renderedComponent.linkToAddSkill).toHaveAttribute(
      "href",
      "/add-skills"
    );
  });
});
