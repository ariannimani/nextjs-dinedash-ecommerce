// @DEPRECATED use packages/ui/src/theme/breakpoints.ts instead
// Reference: https://github.com/Instamotion/im-components2/blob/9cd109ef199579d7013999b4bae1877a026ffa49/packages/components/src/components/Theme/IMTheme/IMTheme.ts#L110

const smallMobile = {
  min: 360,
  max: 424,
};

const mobile = {
  min: smallMobile.max + 1,
  max: 575,
};

const tablet = {
  min: mobile.max + 1,
  max: 1023,
};

const desktop = {
  min: tablet.max + 1,
  max: 1439,
};

const largeDesktop = {
  min: desktop.max + 1,
  max: 2559,
};

const fourKResolution = {
  min: largeDesktop.max + 1,
};

export const breakpoints = {
  smallMobile,
  mobile,
  tablet,
  desktop,
  largeDesktop,
  fourKResolution,
};
