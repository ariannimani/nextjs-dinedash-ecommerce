"use client";
import React, { MouseEventHandler } from "react";
import * as S from "./Button.styled";
import { CSSProperties } from "styled-components";

export interface ButtonProps {
  testId?: string;
  style?: CSSProperties;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button({
  onClick,
  variant = "primary",
  children,
  className,
  icon,
  testId,
}: ButtonProps): JSX.Element {
  return (
    <S.Button
      data-testid={testId}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {icon && <div className="icon">{icon}</div>}
      {children}
    </S.Button>
  );
}
