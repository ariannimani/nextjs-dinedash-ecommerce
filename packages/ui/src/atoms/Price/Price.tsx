import React from "react";
import styles from "./Price.module.css";
import { convertCurrency } from "../../helpers";

export interface PriceProps {
  children: number;
  testId?: string;
  className?: string;
}

export function Price({
  children,
  testId,
  className,
}: PriceProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      {convertCurrency(children)}
    </div>
  );
}
