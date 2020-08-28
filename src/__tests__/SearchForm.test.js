/* eslint-disable class-methods-use-this */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchForm from "../components/SearchForm";

describe("SearchForm", () => {
  const mockOnFill = jest.fn();
  const mockOnpick = jest.fn();

  const setUp = () => {
    const { asFragment, getByRole } = render(
      <SearchForm
        className="searchform"
        title="searchform"
        onFill={mockOnFill}
        onPick={mockOnpick}
      />
    );

    return {
      asFragment: asFragment(),
      input: getByRole("textbox", { name: /searchform/i }),
      largeRadio: getByRole("radio", { name: /large/i }),
      mediumRadio: getByRole("radio", { name: /medium/i }),
      smallRadio: getByRole("radio", { name: /small/i }),
      largeRadioLabel: getByRole("radio", { name: /large/i }).closest("label"),
      mediumRadioLabel: getByRole("radio", { name: /medium/i }).closest(
        "label"
      ),
      smallRadioLabel: getByRole("radio", { name: /small/i }).closest("label"),
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

  it("renders an properly", () => {
    expect(renderedComponent.input).toBeInTheDocument();
    expect(renderedComponent.input).toHaveClass("searchform");

    expect(renderedComponent.largeRadio).toBeInTheDocument();
    expect(renderedComponent.largeRadioLabel).toHaveTextContent(/large/i);
    expect(renderedComponent.largeRadioLabel).toHaveClass("radio");

    expect(renderedComponent.mediumRadioLabel).toHaveTextContent(/medium/i);
    expect(renderedComponent.mediumRadio).toBeInTheDocument();
    expect(renderedComponent.mediumRadioLabel).toHaveClass("radio");

    expect(renderedComponent.smallRadio).toBeInTheDocument();
    expect(renderedComponent.smallRadioLabel).toHaveTextContent(/small/i);
    expect(renderedComponent.smallRadioLabel).toHaveClass("radio");
  });

  it("searchform functions", () => {
    expect(renderedComponent.input.value).toBe("");
    fireEvent.change(renderedComponent.input, { target: { value: "address" } });
    expect(renderedComponent.input.value).toBe("address");
  });

  it("radio buttons function", () => {
    fireEvent.click(renderedComponent.largeRadio);
    expect(renderedComponent.largeRadio).toBeChecked();
    expect(renderedComponent.mediumRadio).not.toBeChecked();
    expect(renderedComponent.smallRadio).not.toBeChecked();

    fireEvent.click(renderedComponent.mediumRadio);
    expect(renderedComponent.largeRadio).not.toBeChecked();
    expect(renderedComponent.mediumRadio).toBeChecked();
    expect(renderedComponent.smallRadio).not.toBeChecked();
    expect(mockOnpick).toHaveBeenCalled();

    fireEvent.click(renderedComponent.smallRadio);
    expect(renderedComponent.largeRadio).not.toBeChecked();
    expect(renderedComponent.mediumRadio).not.toBeChecked();
    expect(renderedComponent.smallRadio).toBeChecked();
    expect(mockOnpick).toHaveBeenCalled();
  });
});
