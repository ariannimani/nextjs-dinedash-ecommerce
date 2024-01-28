import React from "react";
import { render, screen } from "../../helpers/tests";
import { Badge } from "./Badge";

test("Badge", () => {
  render(<Badge testId="badge">Badge</Badge>);
  expect(screen.getByTestId("badge")).toBeInTheDocument();
});
