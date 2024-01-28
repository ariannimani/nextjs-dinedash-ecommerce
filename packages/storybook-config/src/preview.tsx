import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "@dinedash/theme";

export const withTheme: Decorator = (StoryFn) => {
  return (
    <ThemeProvider>
      <StoryFn />
    </ThemeProvider>
  );
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
