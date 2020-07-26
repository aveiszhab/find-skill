import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

it("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/skill/i);
  expect(linkElement).toBeInTheDocument();
});
