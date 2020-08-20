import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddSkills from "../components/AddSkills";

describe("AddSkill", () => {
  const setUp = () => {
    const { asFragment, getByRole } = render(<AddSkills />);

    return {
      asFragment: asFragment(),
      name: getByRole("textbox", { name: /name/i }),
      skill: getByRole("textbox", { name: /skill/i }),
      description: getByRole("textbox", { name: /description/i }),
      postcode: getByRole("textbox", { name: /postcode/i }),
      email: getByRole("textbox", { name: /email/i }),
      free: getByRole("combobox", { name: /free/i }),
      professional: getByRole("combobox", { name: /professional/i }),
      addButton: getByRole("button", { name: /add/i }),
    };
  };

  const mockHandleFieldChange = (field, value) => {
    fireEvent.change(field, {
      target: { value },
    });
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  describe("renders correctly", () => {
    it("matches the AddSkills snapshot", () => {
      expect(renderedComponent.asFragment).toMatchSnapshot();
    });

    it("name", () => {
      expect(renderedComponent.name).toHaveClass("input");
      expect(renderedComponent.name).toHaveAttribute("type", "text");
      expect(renderedComponent.name).toHaveAttribute("id", "name");
      expect(renderedComponent.name).toHaveAttribute("name", "name");
    });

    it("skill", () => {
      expect(renderedComponent.skill).toHaveClass("input");
      expect(renderedComponent.skill).toHaveAttribute("type", "text");
      expect(renderedComponent.skill).toHaveAttribute("id", "skill");
      expect(renderedComponent.skill).toHaveAttribute("name", "skill");
    });

    it("description", () => {
      expect(renderedComponent.description).toHaveClass("input");
      expect(renderedComponent.description).toHaveAttribute("type", "text");
      expect(renderedComponent.description).toHaveAttribute(
        "id",
        "description"
      );
      expect(renderedComponent.description).toHaveAttribute(
        "name",
        "description"
      );
    });

    it("postcode", () => {
      expect(renderedComponent.postcode).toHaveClass("input");
      expect(renderedComponent.postcode).toHaveAttribute("type", "text");
      expect(renderedComponent.postcode).toHaveAttribute("id", "postcode");
      expect(renderedComponent.postcode).toHaveAttribute("name", "postcode");
    });

    it("email", () => {
      expect(renderedComponent.email).toHaveClass("input");
      expect(renderedComponent.email).toHaveAttribute("type", "text");
      expect(renderedComponent.email).toHaveAttribute("id", "email");
      expect(renderedComponent.email).toHaveAttribute("name", "email");
    });

    it("free", () => {
      expect(renderedComponent.free).toHaveClass("select");
      expect(renderedComponent.free).toHaveAttribute("id", "free");
      expect(renderedComponent.free).toHaveAttribute("name", "free");
    });

    it("professional", () => {
      expect(renderedComponent.professional).toHaveClass("select");
      expect(renderedComponent.professional).toHaveAttribute(
        "id",
        "professional"
      );
      expect(renderedComponent.professional).toHaveAttribute(
        "name",
        "professional"
      );
    });
  });

  describe("form fields works correctly onChange", () => {
    it("name", () => {
      expect(renderedComponent.name.value).toBe("");
      mockHandleFieldChange(renderedComponent.name, "Test_Name");
      expect(renderedComponent.name.value).toBe("Test_Name");
    });

    it("skill", () => {
      expect(renderedComponent.skill.value).toBe("");
      mockHandleFieldChange(renderedComponent.skill, "Test_Skill");
      expect(renderedComponent.skill.value).toBe("Test_Skill");
    });

    it("description", () => {
      expect(renderedComponent.description.value).toBe("");
      mockHandleFieldChange(renderedComponent.description, "Test_describe");
      expect(renderedComponent.description.value).toBe("Test_describe");
    });

    it("postcode", () => {
      expect(renderedComponent.postcode.value).toBe("");
      mockHandleFieldChange(renderedComponent.postcode, "Test_postcode");
      expect(renderedComponent.postcode.value).toBe("Test_postcode");
    });
    it("free", () => {
      expect(renderedComponent.free.value).toBe("true");
      mockHandleFieldChange(renderedComponent.free, "false");
      expect(renderedComponent.free.value).toBe("false");
    });

    it("professional", () => {
      expect(renderedComponent.professional.value).toBe("false");
      mockHandleFieldChange(renderedComponent.professional, "true");
      expect(renderedComponent.professional.value).toBe("true");
    });

    it("email", () => {
      expect(renderedComponent.email.value).toBe("");
      mockHandleFieldChange(renderedComponent.email, "Test_email@com");
      expect(renderedComponent.email.value).toBe("Test_email@com");
    });
  });
});
