import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./(providers)";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DineDash",
  description: "DineDash e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
