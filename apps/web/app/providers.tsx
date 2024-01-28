"use client";

import React from "react";
import { ThemeProvider } from "@dinedash/theme";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemeProvider>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Providers;
