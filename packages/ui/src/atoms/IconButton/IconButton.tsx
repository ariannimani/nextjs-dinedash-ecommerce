import React from "react";
import * as S from "./IconButton.styled";

export interface IconButtonProps {
  testId: string;
  children: React.ReactNode;
  className?: string;
}

export function IconButton({
  testId,
  children,
  className,
}: IconButtonProps): JSX.Element {
  return (
    <S.IconButton data-testid={testId} className={className}>
      {children}
    </S.IconButton>
  );
}
