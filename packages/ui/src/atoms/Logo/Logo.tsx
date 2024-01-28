import React from "react";
import styles from "./Logo.module.css";
import { BurgerIcon } from "../../icons";
import { Typography } from "..";

export interface LogoProps {
  testId?: string;
  className?: string;
}

const LOGO_TITLE = "DineDash";

export function Logo({ testId, className }: LogoProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <BurgerIcon />
      <Typography testId="logo-title">{LOGO_TITLE}</Typography>
    </div>
  );
}
