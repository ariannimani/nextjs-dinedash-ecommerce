"use client";

import React, { Dispatch, SetStateAction, createContext } from "react";
import { THEMES } from "./Theme.config";
import { ThemeType, Theme } from "./Theme.model";

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: "light",
  theme: THEMES["light"],
} as ThemeContextProps);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("light");

  React.useEffect(() => {
    const theme = THEMES[currentTheme];

    // Set CSS variables on the :root pseudo-class
    const root = document.documentElement;
    Object.entries(theme).forEach(([property, value]) => {
      root.style.setProperty(property, value.toString());
    });
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
