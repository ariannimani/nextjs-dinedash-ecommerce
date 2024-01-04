import { css } from "styled-components";
import { breakpoints } from "../constants/breakpoints";
import { queries } from "./media";

const style = css`
  color: red;
`;

test("Style - Media Queries", () => {
  const untilDesktop = queries.untilDesktop(style).join("");
  expect(untilDesktop).toContain(
    `@media (max-width: ${breakpoints.desktop.min - 1}px)`,
  );

  const fromTablet = queries.fromTablet(style).join("");
  expect(fromTablet).toContain(
    `@media (min-width: ${breakpoints.tablet.min}px)`,
  );

  const onlyTablet = queries.onlyTablet(style).join("");
  expect(onlyTablet).toContain(
    `@media (min-width: ${breakpoints.tablet.min}px) and (max-width: ${
      breakpoints.tablet.max - 1
    }px)`,
  );

  const onlyDesktop = queries.onlyDesktop(style).join("");
  expect(onlyDesktop).toContain(
    `@media (min-width: ${breakpoints.desktop.min}px)`,
  );

  const onlyLargeDesktop = queries.onlyLargeDesktop(style).join("");
  expect(onlyLargeDesktop).toContain(
    `@media (min-width: ${breakpoints.largeDesktop.min}px)`,
  );
});
