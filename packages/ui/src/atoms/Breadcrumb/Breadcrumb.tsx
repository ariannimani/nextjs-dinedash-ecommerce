import React from "react";
import * as S from "./Breadcrumb.styled";
import { ArrowLeftSmallIcon } from "../../icons";

export interface BreadcrumbProps {
  children: string;
  testId?: string;
  className?: string;
}

export function Breadcrumb({
  children,
  testId,
  className,
}: BreadcrumbProps): JSX.Element {
  return (
    <S.Breadcrumb data-testid={testId} className={className}>
      <S.LeftArrowIcon />
      {children}
    </S.Breadcrumb>
  );
}
