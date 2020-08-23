/* eslint-disable class-methods-use-this */
import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const mockOnClick = jest.fn();

  const setUp = () => {
    const { asFragment, getByRole } = render(
      <SearchForm
        className="searchform"
        title="searchform"
        onClick={mockOnClick}
      />
    );

    return {
      asFragment: asFragment(),
      input: getByRole("textbox", { name: "searchform" }),
    };
  };

  let renderedComponent;

  const setupGoogleMock = () => {
    const google = {
      maps: {
        places: {
          Autocomplete: class {
            setComponentRestrictions() {}

            setTypes() {}

            setFields() {}

            addListener() {}
          },
        },
      },
    };
    global.window.google = google;
  };

  beforeEach(() => {
    renderedComponent = setUp();
  });

  beforeAll(() => {
    setupGoogleMock();
  });

  it("renders correctly to match the SearchForm snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders an input node", () => {
    expect(renderedComponent.input).toBeInTheDocument();
    expect(renderedComponent.input).toHaveClass("searchform");
  });
});
