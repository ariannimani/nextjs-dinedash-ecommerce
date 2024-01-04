"use client";
import { Button } from "@dinedash/ui";
import React, { CSSProperties } from "react";

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "6rem",
  minHeight: "100vh",
};

export default function Page(): JSX.Element {
  return (
    <main style={styles}>
      <Button variant="secondary" onClick={() => {}}>
        Test
      </Button>
    </main>
  );
}
