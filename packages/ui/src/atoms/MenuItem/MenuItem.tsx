"use client";

import React, { useState } from "react";
import * as S from "./MenuItem.styled";
import { FireIcon, StarFilledIcon } from "../../icons";

export interface MenuItemProps {
  children: string;
  testId?: string;
  className?: string;
  active?: boolean;
}

export function MenuItem({
  children,
  testId,
  className,
  active,
}: MenuItemProps): JSX.Element {
  return (
    <S.MenuItem data-testid={testId} className={className} active={active}>
      {active ? <FireIcon /> : <StarFilledIcon className="starIcon" />}
      {children}
    </S.MenuItem>
  );
}
