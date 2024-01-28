import React from "react";
import styles from "./IconButton.module.css";

export interface IconButtonProps {
  testId?: string;
  children?: React.ReactNode;
  className?: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
}

export function IconButton({
  testId,
  children,
  className,
  variant,
  onClick,
}: IconButtonProps): JSX.Element {
  const buttonClassName = `${styles["icon-button"]} ${styles[`icon-button-${variant}`]} ${className || ""}`;

  return (
    <button data-testid={testId} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}
