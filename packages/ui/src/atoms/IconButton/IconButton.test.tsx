import React from "react";
import { render, screen } from "../../helpers/tests";
import { IconButton } from "./IconButton";
import { CartIcon } from "../../icons";

test("IconButton", () => {
  render(
    <IconButton testId="iconButton">
      <CartIcon />
    </IconButton>,
  );
  expect(screen.getByTestId("iconButton")).toBeInTheDocument();
});
