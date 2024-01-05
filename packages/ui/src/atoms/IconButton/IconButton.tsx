import React from "react";
import * as S from "./IconButton.styled";

export interface IconButtonProps {
  testId: string;
  children: React.ReactNode;
}

export function IconButton({ testId, children }: IconButtonProps): JSX.Element {
  return <S.IconButton data-testid={testId}>{children}</S.IconButton>;
}
