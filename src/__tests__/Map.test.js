import React from "react";
import { render } from "@testing-library/react";
import Map from "../components/Map";

describe("Map", () => {
  const mockOnMount = jest.fn();

  const mockSkills = [
    {
      _id: 1,
      name: "Test_Name1",
      skill: "Test_Skill1",
      description: "Test_Description1",
      postcode: "Test_Postcode1",
      free: false,
      professional: true,
      email: "j.d.Smith@gmail.com",
      lat: 53.480759,
      long: -2.242631,
    },
    {
      _id: 2,
      name: "Test_Name2",
      skill: "Test_Skill2",
      description: "Test_Description2",
      postcode: "Test_Postcode2",
      free: true,
      professional: true,
      email: "j.d.Smith@gmail.com",
      lat: 63.480759,
      long: -2.242631,
    },
  ];
  const setUp = () => {
    const { asFragment, getByRole } = render(
      <Map
        className="map"
        title="map"
        onMount={mockOnMount}
        onMountProps={mockSkills}
      />
    );

    return {
      asFragment: asFragment(),
      map: getByRole("generic", { name: "map" }),
    };
  };

  let renderedComponent;

  const setupGoogleMock = () => {
    const google = {
      maps: { Map: class {} },
    };
    global.window.google = google;
  };

  beforeEach(() => {
    renderedComponent = setUp();
  });

  beforeAll(() => {
    setupGoogleMock();
  });

  it("renders correctly to match the Map snapshot", () => {
    expect(renderedComponent.asFragment).toMatchSnapshot();
  });

  it("renders a map node", () => {
    expect(renderedComponent.map).toBeInTheDocument();
    expect(renderedComponent.map).toHaveClass("map");
  });

  it("calls the createMarker Mock", () => {
    expect(mockOnMount).toHaveBeenCalled();
  });
});
