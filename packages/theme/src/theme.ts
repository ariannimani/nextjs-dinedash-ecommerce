import { fonts } from "./fonts";
import { mediaQueries } from "./media";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { zIndexes } from "./zIndexes";

export const defaultTheme = {
  palette,
  fonts,
  breakpoints: mediaQueries,
  spacing,
  zIndexes,
  shadows,
};
