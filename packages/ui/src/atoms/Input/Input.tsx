import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  testId?: string;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function Input({
  testId,
  placeholder,
  className,
  icon,
  ...props
}: InputProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      {icon && icon}
      <input className={styles.input} placeholder={placeholder} {...props} />
    </div>
  );
}
