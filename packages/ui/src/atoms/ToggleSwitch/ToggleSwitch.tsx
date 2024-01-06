import React, { useState } from "react";
import * as S from "./ToggleSwitch.styled";

export interface ToggleSwitchProps {
  testId?: string;
  className?: string;
}

export function ToggleSwitch({
  testId,
  className,
}: ToggleSwitchProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <S.ToggleButtonWrapper data-testid={testId} className={className}>
      <S.ToggleButton onClick={handleToggle}>
        <S.ToggleBall active={isActive} />
      </S.ToggleButton>
    </S.ToggleButtonWrapper>
  );
}
