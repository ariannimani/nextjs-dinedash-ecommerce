import React from "react";
import styles from "./Badge.module.css";

export interface BadgeProps {
  children: number;
  testId?: string;
  className?: string;
}

export function Badge({
  children,
  testId,
  className,
}: BadgeProps): JSX.Element {
  return (
    <span
      data-testid={testId}
      className={`${styles.container} ${className || ""}`}
    >
      {children}
    </span>
  );
}
