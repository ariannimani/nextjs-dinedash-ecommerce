import React from "react";
import * as S from "./Badge.styled";

export interface BadgeProps {
  children: string;
  testId?: string;
}

export function Badge({ children, testId }: BadgeProps): JSX.Element {
  return <S.Badge data-testid={testId}>{children}</S.Badge>;
}
