import React from "react";
import * as S from "./Typography.styled";

export interface TypographyProps {
  children: React.ReactNode;
  testId: string;
  className?: string;
}

export function Typography({
  children,
  testId,
  className,
}: TypographyProps): JSX.Element {
  return (
    <S.Typography data-testid={testId} className={className}>
      {children}
    </S.Typography>
  );
}
