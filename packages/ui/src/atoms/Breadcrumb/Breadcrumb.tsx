import React from "react";
import styles from "./Breadcrumb.module.css";
import { ArrowForwardIcon, ArrowLeftSmallIcon } from "../../icons";

export interface BreadcrumbProps {
  children: string;
  testId: string;
  className?: string;
  variant?: "left" | "right";
  href: string;
}

export function Breadcrumb({
  children,
  testId,
  className,
  variant = "left",
  href = "",
}: BreadcrumbProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      {variant === "left" && <ArrowLeftSmallIcon />}
      {children}
      {variant === "right" && <ArrowForwardIcon />}
    </div>
  );
}
