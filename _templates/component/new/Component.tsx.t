---
to: <%= path_from_root %>.tsx
---
import React from 'react';
import styles from './<%= name %>.module.css';

export interface <%= name %>Props {
  children: string;
  testId?: string;
  className?:string
}

export function <%= name%>({ children, testId, className}: <%= name %>Props): JSX.Element {
  return <div data-testid={testId} className={`${styles.container} ${className}`}>{children}</div>;
}
