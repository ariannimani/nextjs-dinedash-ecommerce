import React from 'react';
import * as S from './Price.styled';

export interface PriceProps {
  children: string;
  testId?: string;
  className?:string
}

export function Price({ children, testId, className}: PriceProps): JSX.Element {
  return <S.Price data-testid={testId} className={className}>{children}</S.Price>;
}
