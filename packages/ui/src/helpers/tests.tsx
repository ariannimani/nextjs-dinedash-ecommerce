import type { FC, ReactElement } from "react";
import React from "react";
import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@dinedash/theme";

export const WithProviders: FC = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult => render(ui, { wrapper: WithProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
