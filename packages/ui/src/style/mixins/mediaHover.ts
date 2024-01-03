import type { FlattenSimpleInterpolation } from "styled-components";
import { css } from "styled-components";

/** Adds a media check to hover queries so they're only rendered on devices that support hovering */
export const mediaHover = (
  rules: FlattenSimpleInterpolation,
): FlattenSimpleInterpolation => {
  return css`
    @media (hover: hover) {
      &:hover {
        ${rules};
      }
    }
  `;
};
