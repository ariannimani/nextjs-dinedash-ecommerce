import React from "react";
import { render, screen } from "../../helpers/tests";
import { BonusCard } from "./BonusCard";

test("BonusCard", () => {
  render(
    <BonusCard testId="bonusCard" title={""} content={""} buttonTitle={""} />
  );
  expect(screen.getByTestId("bonusCard")).toBeInTheDocument();
});
