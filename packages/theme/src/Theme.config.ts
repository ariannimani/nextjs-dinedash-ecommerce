import { Color } from "./colors";
import { Shadows } from "./shadows";
import { Spacing } from "./spacing";
import { ThemeType, Theme } from "./Theme.model";

export const THEMES: Record<ThemeType, Theme> = {
  light: {
    "--secondary": Color.white,
    "--primary": Color.black,
    "--primary-rgba": Color.blackRGBA,
    "--blue-light": Color.blueLight,
    "--orange-light": Color.orangeLight,
    "--orange-medium": Color.orangeMedium,
    "--pink-light": Color.pinkLight,
    "--pink-medium": Color.pinkMedium,
    "--pink-dark": Color.pinkDark,
    "--gray-98": Color.gray98,
    "--gray-96": Color.gray96,
    "--gray-93": Color.gray93,
    "--gray-68": Color.gray68,
    "--gray-56": Color.gray56,
    "--gray-48": Color.gray48,
    "--text-primary": Color.black,
    "--text-secondary": Color.gray68,
    "--text-main": Color.white,
    "--text-link": Color.pinkMedium,
    "--border-light": Color.gray93,
    "--border-dark": Color.black,
    "--shadow-primary": Shadows.primary,
    "--spacing-xs": Spacing.xs,
    "--spacing-s": Spacing.s,
    "--spacing-md": Spacing.md,
    "--spacing-lg": Spacing.lg,
    "--spacing-xl": Spacing.xl,
    "--spacing-2xl": Spacing["2xl"],
    "--spacing-3xl": Spacing["3xl"],
    "--spacing-4xl": Spacing["4xl"],
  },
};
