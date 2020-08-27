import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FilterForm from "../components/FilterForm";

describe("FilterForm", () => {
  const setUp = () => {
    const { asFragment, getByRole } = render(
      <Router>
        <FilterForm />
      </Router>
    );

    return {
      asFragment: asFragment(),
      heading: getByRole("heading", { name: /search/i }),
      searchbox: getByRole("textbox", { name: /search-skill/i }),
      free: getByRole("link", { name: /free/i }),
      charge: getByRole("link", { name: /charge/i }),
      searchButton: getByRole("button", { name: /search/i }),
      resetButton: getByRole("button", { name: /clear/i }),
    };
  };

  let renderedComponent;

  beforeEach(() => {
    renderedComponent = setUp();
  });

  it("renders correctly to match the SideBar snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders correctly", () => {
    expect(renderedComponent.heading).toHaveTextContent("Search by Skill");

    expect(renderedComponent.free).toHaveTextContent("Free");
    expect(renderedComponent.free).toHaveAttribute("href", "/?free=true");

    expect(renderedComponent.charge).toHaveTextContent("For charge");
    expect(renderedComponent.charge).toHaveAttribute("href", "/?free=false");

    expect(renderedComponent.searchButton).toHaveClass("search-skill-button");
    expect(renderedComponent.searchButton).toBeEnabled();

    expect(renderedComponent.resetButton).toHaveClass("reset-button");
    expect(renderedComponent.resetButton).toBeEnabled();

    expect(renderedComponent.searchbox).toHaveClass("search-skill-input");
  });
});
