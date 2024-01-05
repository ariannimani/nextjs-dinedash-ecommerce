import React from "react";
import * as S from "./Header.styled";
import {
  BurgerIcon,
  CartIcon,
  MenuIcon,
  PinSmallIcon,
  UserIcon,
} from "../../icons";
import { Badge, IconButton, Input, Typography } from "../../atoms";

const LOGO_TITLE = "DineDash";
const DELIVERY_TITLE = "Delivery Address";
const SEARCH_PLACEHOLDER = "Search restorants, dishes or goods";

const menuItems = ["Shop", "Restaurants"];

export function Header(): JSX.Element {
  return (
    <S.Container data-testid="main-header">
      <S.WrapperDesktopOnly>
        <S.FlexWrapper>
          <BurgerIcon />
          <Typography testId="logo-title">{LOGO_TITLE}</Typography>
        </S.FlexWrapper>

        <S.FlexWrapper>
          <PinSmallIcon />
          <Typography testId="delivery-title">{DELIVERY_TITLE}</Typography>
        </S.FlexWrapper>
        <S.MenuWrapper>
          {menuItems.map((item, index) => (
            <S.MenuItem testId={`menu-item-${index}`}>{item}</S.MenuItem>
          ))}
        </S.MenuWrapper>
        <Input placeholder={SEARCH_PLACEHOLDER} />
      </S.WrapperDesktopOnly>

      <S.MenuButtonMobileOnly>
        <IconButton testId="menu-icon">
          <MenuIcon />
        </IconButton>
      </S.MenuButtonMobileOnly>

      <S.FlexWrapper>
        <IconButton testId="cart-icon-button">
          <Badge>3</Badge>
          <CartIcon />
        </IconButton>
        <IconButton testId="user-icon-button">
          <UserIcon />
        </IconButton>
      </S.FlexWrapper>
    </S.Container>
  );
}
