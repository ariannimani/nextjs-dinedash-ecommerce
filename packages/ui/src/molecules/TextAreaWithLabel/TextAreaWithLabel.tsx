import React, { TextareaHTMLAttributes } from "react";
import * as S from "./TextAreaWithLabel.styled";
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
    <S.TextAreaWithLabel data-testid={testId} className={className}>
      <S.Label testId="input-label">{label}</S.Label>
      <TextArea {...props} />
    </S.TextAreaWithLabel>
  );
}
