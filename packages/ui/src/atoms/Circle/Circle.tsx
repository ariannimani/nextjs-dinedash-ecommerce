import React from "react";
import * as S from "./Circle.styled";

export interface CircleProps {
  children: React.ReactNode;
  testId?: string;
  className?: string;
}

export function Circle({
  children,
  testId,
  className,
}: CircleProps): JSX.Element {
  return (
    <S.Circle data-testid={testId} className={className}>
      {children}
    </S.Circle>
  );
}
