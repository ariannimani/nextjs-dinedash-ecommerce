import React from "react";
import * as S from "./Input.styled";
import { SearchIcon } from "../../icons";

export interface InputProps {
  testId?: string;
  placeholder?: string;
  className?: string;
}

export function Input({
  testId,
  placeholder,
  className,
}: InputProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <SearchIcon />
      <S.Input placeholder={placeholder} />
    </S.Container>
  );
}
