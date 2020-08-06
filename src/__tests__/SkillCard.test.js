import React from "react";
import { render, screen, } from "@testing-library/react";
import SkillCard from "../components/SkillCard";

describe("SkillCard", () => {
  const props = {
    name: "Test_Name",
    skill: "Test_Skill",
    description: "Test_Description",
    postcode: "Test_Postcode",
    free: false,
    professional: true,
    email: "j.d.Smith@gmail.com",
  };

  const setUp = () => {
    const { asFragment, getByText, getByTestId, getByRole } = render(<SkillCard {...props} />);

    return {
      asFragment: asFragment(),
      name: getByText(/name/i),
      skill: getByText(/skill/i),
      description: getByText(/description/i),
      postcode: getByText(/postcode/i),
      free: getByTestId(/free/i),
      professional: getByTestId(/professional/i),
      email: getByRole("link"),
    };
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  it("to match the SkillCard snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders correctly", () => {
    expect(renderedComponent.name).toHaveTextContent("Test_Name");
    expect(renderedComponent.skill).toHaveTextContent("Test_Skill");
    expect(renderedComponent.description).toHaveTextContent("Test_Description");
    expect(renderedComponent.postcode).toHaveTextContent("Test_Postcode");
    expect(renderedComponent.free).toHaveTextContent("No");
    expect(renderedComponent.professional).toHaveTextContent("Yes");
    expect(renderedComponent.email).toHaveAttribute("href");
  });
});
