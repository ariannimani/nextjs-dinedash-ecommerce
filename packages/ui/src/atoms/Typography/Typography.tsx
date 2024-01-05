import React from "react";
import * as S from "./Typography.styled";

export interface TypographyProps {
  children: string;
  testId: string;
}

export function Typography({ children, testId }: TypographyProps): JSX.Element {
  return <S.Typography data-testid={testId}>{children}</S.Typography>;
}
