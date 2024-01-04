"use client";

import { defaultTheme } from "@dinedash/theme";
import { ThemeProvider } from "styled-components";

const Providers = (props: React.PropsWithChildren) => {
  return <ThemeProvider theme={defaultTheme}>{props.children}</ThemeProvider>;
};

export default Providers;
