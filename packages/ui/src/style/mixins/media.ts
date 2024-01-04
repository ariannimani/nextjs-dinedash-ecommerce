import type { MediaQuery, QueryCheck } from "@dinedash/theme";
import { breakpoints as newBreakpoints } from "@dinedash/theme";
import type { CSSProp } from "styled-components";
import { css } from "styled-components";
import { breakpoints } from "../constants";

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

export const onlySmallMobile = createMediaQuery([
  {
    minWidth: newBreakpoints.smallMobile.min,
    maxWidth: newBreakpoints.smallMobile.max,
  },
]);

export const onlyMobile = createMediaQuery([
  {
    minWidth: newBreakpoints.smallMobile.max + 1,
    maxWidth: newBreakpoints.mobile.max,
  },
]);

export const onlyLargeMobile = createMediaQuery([
  {
    minWidth: newBreakpoints.largeMobile.max + 1,
    maxWidth: newBreakpoints.largeMobile.max,
  },
]);

// From Tablet ( >= Tablet )
// min-width: 576
export const fromTablet = createMediaQuery([
  {
    minWidth: breakpoints.tablet.min,
  },
]);

// Only Tablet ( == Tablet )
// min-width 576 and max-width 1023
export const onlyTablet = createMediaQuery([
  {
    minWidth: breakpoints.tablet.min,
    maxWidth: breakpoints.tablet.max,
  },
]);

// Until Tablet Max ( <= Tablet.max )
// max-width 1023
export const untilTabletMax = createMediaQuery([
  {
    maxWidth: breakpoints.tablet.max,
  },
]);

// Until Desktop ( <= Desktop )
// max-width 1024
export const untilDesktop = createMediaQuery([
  {
    maxWidth: breakpoints.desktop.min,
  },
]);

// Only Desktop ( == Desktop )
// min-width 1024
export const onlyDesktop = createMediaQuery([
  {
    minWidth: breakpoints.desktop.min,
  },
]);

export const onlyLargeDesktop = createMediaQuery([
  {
    minWidth: breakpoints.largeDesktop.min,
  },
]);

export const queries: Record<string, MediaQuery> = {
  onlySmallMobile,
  onlyMobile,
  onlyLargeMobile,
  untilDesktop,
  fromTablet,
  onlyTablet,
  onlyDesktop,
  onlyLargeDesktop,
};
