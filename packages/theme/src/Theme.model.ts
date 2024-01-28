import { Color } from "./colors";
import { Shadows } from "./shadows";
import { Spacing } from "./spacing";

export type ThemeType = "light";

export interface Theme {
  "--secondary": Color;
  "--primary": Color;
  "--primary-rgba": Color;
  "--blue-light": Color;
  "--orange-light": Color;
  "--orange-medium": Color;
  "--pink-light": Color;
  "--pink-medium": Color;
  "--pink-dark": Color;
  "--gray-98": Color;
  "--gray-96": Color;
  "--gray-93": Color;
  "--gray-68": Color;
  "--gray-56": Color;
  "--gray-48": Color;
  "--text-primary": Color;
  "--text-secondary": Color;
  "--text-main": Color;
  "--text-link": Color;
  "--border-light": Color;
  "--border-dark": Color;
  "--shadow-primary": Shadows;
  "--spacing-xs": Spacing;
  "--spacing-s": Spacing;
  "--spacing-md": Spacing;
  "--spacing-lg": Spacing;
  "--spacing-xl": Spacing;
  "--spacing-2xl": Spacing;
  "--spacing-3xl": Spacing;
  "--spacing-4xl": Spacing;
}
