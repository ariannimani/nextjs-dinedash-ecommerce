---
to: <%= path_from_root %>.tsx
---
import React from 'react';
import * as S from './<%= name %>.styled';

export interface <%= name %>Props {
  children: string;
  testId?: string;
  className?:string
}

export function <%= name%>({ children, testId, className}: <%= name %>Props): JSX.Element {
  return <S.<%= name%> data-testid={testId} className={className}>{children}</S.<%= name%>>;
}
