import React, { TextareaHTMLAttributes } from "react";
import styles from "./TextAreaWithLabel.module.css";
import { TextArea } from "../../atoms";

export interface TextAreaWithLabelProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  testId?: string;
  className?: string;
}

export function TextAreaWithLabel({
  label,
  testId,
  className,
  ...props
}: TextAreaWithLabelProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <label data-testid="text-area-label">{label}</label>
      <TextArea {...props} />
    </div>
  );
}
