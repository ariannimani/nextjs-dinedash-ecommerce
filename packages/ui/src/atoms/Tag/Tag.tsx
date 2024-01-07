import React from "react";
import * as S from "./Tag.styled";

export interface RaitingProps {
  icon: React.ReactNode;
  children: string;
  testId?: string;
  className?: string;
  variant: string;
}

export function Tag({
  children,
  icon,
  testId,
  className,
  variant,
}: RaitingProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className} variant={variant}>
      {icon}
      {children}
    </S.Container>
  );
}
