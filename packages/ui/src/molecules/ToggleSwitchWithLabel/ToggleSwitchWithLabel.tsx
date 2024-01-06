import React from "react";
import * as S from "./ToggleSwitchWithLabel.styled";
import { TextArea, ToggleSwitch } from "../../atoms";

export interface ToggleSwitchWithLabelProps {
  label: string;
  testId?: string;
  className?: string;
}

export function ToggleSwitchWithLabel({
  label,
  testId,
  className,
  ...props
}: ToggleSwitchWithLabelProps): JSX.Element {
  return (
    <S.ToggleSwitchWithLabel data-testid={testId} className={className}>
      <ToggleSwitch />
      <S.Label testId="input-label">{label}</S.Label>
    </S.ToggleSwitchWithLabel>
  );
}
