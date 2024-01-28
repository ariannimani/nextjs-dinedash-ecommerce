// Button.tsx

import React, { CSSProperties, MouseEventHandler } from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  testId?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  iconAlign?: string;
  style?: CSSProperties;
}

export function Button({
  onClick,
  variant = "primary",
  children,
  className,
  icon,
  testId,
  iconAlign = "left",
  style,
}: ButtonProps): JSX.Element {
  const buttonClassName = `${styles.button} ${styles[`button-${variant}`]} ${className || ""}`;

  return (
    <button
      data-testid={testId}
      className={buttonClassName}
      onClick={onClick}
      style={style}
    >
      {icon && iconAlign === "left" && (
        <div className={styles.icon}>{icon}</div>
      )}
      {children}
      {icon && iconAlign === "right" && (
        <div className={styles.icon}>{icon}</div>
      )}
    </button>
  );
}
