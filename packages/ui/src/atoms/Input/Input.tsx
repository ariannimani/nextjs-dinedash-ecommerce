import React from "react";
import * as S from "./Input.styled";
import { SearchIcon } from "../../icons";

export interface InputProps {
  testId?: string;
  placeholder?: string;
}

export function Input({ testId, placeholder }: InputProps): JSX.Element {
  return (
    <S.Container data-testid={testId}>
      <SearchIcon />
      <S.Input placeholder={placeholder} />
    </S.Container>
  );
}
