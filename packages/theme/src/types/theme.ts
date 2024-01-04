import { shadows } from "./../shadows";
import { CSSProp } from "styled-components";

type BasicColorShade = string;

type ComplexColorShades = Record<string, BasicColorShade>;

export type Colors = {
  white: BasicColorShade;
  black: BasicColorShade;
  blue: ComplexColorShades;
  orange: ComplexColorShades;
  pink: ComplexColorShades;
  gray: {
    98: BasicColorShade;
    96: BasicColorShade;
    93: BasicColorShade;
    68: BasicColorShade;
    56: BasicColorShade;
    48: BasicColorShade;
  };
};

export type Palette = {
  colors: Colors;
  borders: {
    light: string;
    dark: string;
  };
  text: {
    primary: string;
    secondary: string;
    link: string;
    main: string;
  };
  shadows: {
    default: BoxShadow;
  };
  alerts: {
    warning: string;
    error: string;
    success: string;
  };
};

type Font = {
  fontFamily: string;
  fontWeight: string;
};

export type Fonts = {
  primary: {
    regular: Font;
    medium: Font;
    bold: Font;
    black: Font;
  };
  secondary: {
    regular: Font;
    medium: Font;
    bold: Font;
  };
  ternary: {
    regular: Font;
    medium: Font;
    bold: Font;
  };
};

export type QueryCheck = {
  minWidth?: number;
  maxWidth?: number;
};

// We need any here because be can't use generics the way needed. However, types are still perfectly checked!
/* eslint-disable @typescript-eslint/no-explicit-any */
export type MediaQuery = (styles: CSSProp) => CSSProp;
/* eslint-enable @typescript-eslint/no-explicit-any */

export type Breakpoints = {
  fromMobile: MediaQuery;
  fromMobileLarge: MediaQuery;
  fromTablet: MediaQuery;
  fromDesktopSmall: MediaQuery;
  fromDesktop: MediaQuery;
  fromDesktopLarge: MediaQuery;
  fromDesktopXLarge: MediaQuery;
};

export type Spacing = {
  xs: string;
  s: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
};

export type ZIndexes = {
  modal: number;
  navigation: number;
  stickyOverlays: number;
  tooltips: number;
  sideBarElements: number;
  cta: number;
  elevated: number;
  bgElements: number;
};

export type BoxShadow = {
  primary: string;
};

export type Shadows = {
  highlight: {
    default: BoxShadow;
  };
};

export type Theme = {
  palette: Palette;
  fonts: Fonts;
  breakpoints: Breakpoints;
  spacing: Spacing;
  zIndexes: ZIndexes;
  shadows: Shadows;
};
