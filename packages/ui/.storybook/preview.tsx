import { ThemeProvider } from "styled-components";
import { DecoratorFn } from "@storybook/react";
import { defaultTheme } from "../../theme/src";
import React from "react";
import { GlobalStyles } from "../src/style";

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <StoryFn />
    </ThemeProvider>
  );
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
