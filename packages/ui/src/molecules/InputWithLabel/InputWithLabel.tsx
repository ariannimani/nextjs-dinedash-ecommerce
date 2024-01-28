import React, { InputHTMLAttributes } from "react";
import styles from "./InputWithLabel.module.css";
import { Input } from "../../atoms";

export interface InputWithLabelProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  testId?: string;
  className?: string;
}
export function InputWithLabel({
  label,
  testId,
  className,
  ...props
}: InputWithLabelProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <label className={styles.label}>{label}</label>
      <Input {...props} />
    </div>
  );
}
