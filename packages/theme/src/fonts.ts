import { Fonts } from "./types/theme";

export const SatoshiVariableRegular = {
  fontFamily: "SatoshiVariable, sans-serif",
  fontWeight: "400",
};

export const SatoshiVariableMedium = {
  fontFamily: "SatoshiVariable, sans-serif",
  fontWeight: "500",
};

export const SatoshiVariableBold = {
  fontFamily: "SatoshiVariable, sans-serif",
  fontWeight: "700",
};
export const SatoshiVariableBlack = {
  fontFamily: "SatoshiVariable, sans-serif",
  fontWeight: "900",
};

export const InterSansSerif = {
  fontFamily: "Inter, sans-serif",
  fontWeight: "400",
};

export const InterSansMedium = {
  fontFamily: "Inter, sans-serif",
  fontWeight: "500",
};

export const InterSansBold = {
  fontFamily: "Inter, sans-serif",
  fontWeight: "700",
};

export const RobotoRegular = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: "400",
};

export const RobotoMedium = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: "500",
};

export const RobotoBold = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: "700",
};

export const fonts = {
  primary: {
    regular: SatoshiVariableRegular,
    medium: SatoshiVariableMedium,
    bold: SatoshiVariableBold,
    black: SatoshiVariableBlack,
  },
  secondary: {
    regular: InterSansSerif,
    medium: InterSansMedium,
    bold: InterSansBold,
  },
  ternary: {
    regular: RobotoRegular,
    medium: RobotoMedium,
    bold: RobotoBold,
  },
};
