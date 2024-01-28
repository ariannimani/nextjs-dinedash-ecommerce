import React from "react";
import styles from "./Tag.module.css";

export interface TagProps {
  icon: React.ReactNode;
  children: string;
  testId?: string;
  className?: string;
  variant: "primary" | "secondary";
}

export function Tag({
  children,
  icon,
  testId,
  className,
  variant,
}: TagProps): JSX.Element {
  const tagClassName = `${styles.container} ${styles[`tag-${variant}`]} ${className || ""}`;

  return (
    <div className={tagClassName} data-testid={testId}>
      {icon}
      {children}
    </div>
  );
}
