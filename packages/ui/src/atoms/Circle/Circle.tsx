import React from "react";
import styles from "./Circle.module.css";

export interface CircleProps {
  children: React.ReactNode;
  testId?: string;
  className?: string;
}

export function Circle({
  children,
  testId,
  className,
}: CircleProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}
