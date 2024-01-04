import type { CSSProp } from "styled-components";
import { css } from "styled-components";
import type { MediaQuery, QueryCheck } from "./types/theme";
import { breakpoints } from "./breakpoints";

const createQueryCheck = ({ minWidth, maxWidth }: QueryCheck): string => {
  const checks: string[] = [];

  if (minWidth) {
    checks.push(`(min-width: ${minWidth}px)`);
  }

  if (maxWidth) {
    checks.push(`(max-width: ${maxWidth}px)`);
  }

  return checks.join(" and ");
};

export const createMediaQuery = (items: QueryCheck[]): MediaQuery => {
  const checkParams = items.map((query) => createQueryCheck(query)).join(", ");

  return (styles: CSSProp) => css`
    @media ${checkParams} {
      ${styles}
    }
  `;
};

// min-width: 360px
const fromMobile = createMediaQuery([
  {
    minWidth: breakpoints.mobile.min,
  },
]);

// min-width: 424px
const fromMobileLarge = createMediaQuery([
  {
    minWidth: breakpoints.largeMobile.min,
  },
]);

// min-width: 768px
const fromTablet = createMediaQuery([
  {
    minWidth: breakpoints.tablet.min,
  },
]);

// min-width: 1024px
const fromDesktopSmall = createMediaQuery([
  {
    minWidth: breakpoints.smallDesktop.min,
  },
]);

// min-width: 1280px
const fromDesktop = createMediaQuery([
  {
    minWidth: breakpoints.desktop.min,
  },
]);

// min-width: 1440px
const fromDesktopLarge = createMediaQuery([
  {
    minWidth: breakpoints.largeDesktop.min,
  },
]);

// min-width: 2560px
const fromDesktopXLarge = createMediaQuery([
  {
    minWidth: breakpoints.xLargeDesktop.min,
  },
]);

export const mediaQueries = {
  fromMobile,
  fromMobileLarge,
  fromTablet,
  fromDesktopSmall,
  fromDesktop,
  fromDesktopLarge,
  fromDesktopXLarge,
};
