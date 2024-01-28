import React from "react";
import { DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "@dinedash/theme";

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider>
      <StoryFn />
    </ThemeProvider>
  );
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
