import React from "react";
import styles from "./Quantifier.module.css";
import { IconButton, Input } from "../../atoms";
import { MinusIcon, PlusIcon } from "../../icons";

export interface QuantifierProps {
  quantity: number;
  testId?: string;
  className?: string;
}

export function Quantifier({
  quantity,
  testId,
  className,
}: QuantifierProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <IconButton variant="secondary" className={styles.decrease}>
        <MinusIcon />
      </IconButton>
      <Input value={quantity} className={styles.quantity} />
      <IconButton variant="secondary" className={styles.increase}>
        <PlusIcon />
      </IconButton>
    </div>
  );
}
