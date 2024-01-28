import React, { InputHTMLAttributes } from "react";
import styles from "./Typography.module.css";

export interface TypographyProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  testId?: string;
  className?: string;
}

export function Typography({
  children,
  testId,
  className,
  ...props
}: TypographyProps): JSX.Element {
  return (
    <p
      data-testid={testId}
      className={`${styles.container} ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
