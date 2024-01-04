/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/ban-ts-comment */
// See https://testing-library.com/docs/react-testing-library/setup/ for more info
import type { FC, ReactElement } from "react";
import React from "react";
import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@dinedash/theme";

export const WithProviders: FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider
      // @ts-ignore
      theme={defaultTheme}
    >
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): RenderResult => render(ui, { wrapper: WithProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
