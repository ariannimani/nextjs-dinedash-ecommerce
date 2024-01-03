---
to: <%= path_from_root %>.tsx
---
import React from 'react';
import * as S from './<%= name %>.styled';

export interface <%= name %>Props {
  children: string;
  testId?: string;
}

export function <%= name%>({ children, testId }: <%= name %>Props): JSX.Element {
  return <S.<%= name%> data-testid={testId}>{children}</S.<%= name%>>;
}
