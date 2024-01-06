import React from "react";
import * as S from "./IconButton.styled";

export interface IconButtonProps {
  testId?: string;
  children?: React.ReactNode;
  className?: string;
  variant: string;
}

export function IconButton({
  testId,
  children,
  className,
  variant,
}: IconButtonProps): JSX.Element {
  return (
    <S.IconButton data-testid={testId} className={className} variant={variant}>
      {children}
    </S.IconButton>
  );
}
