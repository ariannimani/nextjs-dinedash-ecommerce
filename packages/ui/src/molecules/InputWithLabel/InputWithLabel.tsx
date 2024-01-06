import React, { InputHTMLAttributes } from "react";
import * as S from "./InputWithLabel.styled";
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
    <S.InputWithLabel data-testid={testId} className={className}>
      <S.Label testId="input-label">{label}</S.Label>
      <Input {...props} />
    </S.InputWithLabel>
  );
}
