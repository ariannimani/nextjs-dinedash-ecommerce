import { Palette } from "./types/theme";
import { colors } from "./colors";
import { shadows } from "./shadows";

export const palette: Palette = {
  colors: { ...colors },
  text: {
    primary: colors.black,
    secondary: colors.gray[68],
    main: colors.white,
    link: colors.pink.medium,
  },
  borders: {
    light: colors.gray[93],
    dark: colors.black,
  },
  shadows: {
    default: shadows.highlight.default,
  },
  alerts: {
    warning: "",
    error: "",
    success: "",
  },
};
