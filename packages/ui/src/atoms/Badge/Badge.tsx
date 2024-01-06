import React from "react";
import * as S from "./Badge.styled";

export interface BadgeProps {
  children: string;
  testId?: string;
  className?: string;
}

export function Badge({
  children,
  testId,
  className,
}: BadgeProps): JSX.Element {
  return (
    <S.Badge data-testid={testId} className={className}>
      {children}
    </S.Badge>
  );
}
