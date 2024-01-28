import React from "react";
import styles from "./TextArea.module.css";

export interface TextAreaProps {
  testId?: string;
  className?: string;
  icon?: boolean;
  placeholder?: string;
}

export function TextArea({
  testId,
  className,
  placeholder,
  icon,
  ...props
}: TextAreaProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
