import React, { InputHTMLAttributes } from "react";
import * as S from "./Input.styled";
import { SearchIcon } from "../../icons";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  testId?: string;
  placeholder?: string;
  className?: string;
  icon?: boolean;
}

export function Input({
  testId,
  placeholder,
  className,
  icon,
  ...props
}: InputProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      {icon && <SearchIcon />}
      <S.Input placeholder={placeholder} {...props} />
    </S.Container>
  );
}
