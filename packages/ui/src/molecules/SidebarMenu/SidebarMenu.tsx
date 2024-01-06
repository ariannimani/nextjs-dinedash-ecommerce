import React from "react";
import * as S from "./SidebarMenu.styled";
import { MenuItem } from "../../atoms";

export interface SidebarMenuProps {
  testId?: string;
  className?: string;
}

const sideBarMenu = ["Profile details", "My orders", "Log out"];

export function SidebarMenu({
  testId,
  className,
}: SidebarMenuProps): JSX.Element {
  return (
    <S.SidebarMenu data-testid={testId} className={className}>
      {sideBarMenu.map((item, index) => (
        <MenuItem key={item} active={index === 1}>
          {item}
        </MenuItem>
      ))}
    </S.SidebarMenu>
  );
}
