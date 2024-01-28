"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import {
  Badge,
  IconButton,
  Input,
  Logo,
  StyledLink,
  Typography,
} from "../../atoms";
import {
  CartIcon,
  MenuIcon,
  PinSmallIcon,
  SearchIcon,
  UserIcon,
} from "../../icons";
import {
  HEADER_CART_ITEMS,
  HEADER_DELIVERY_TITLE,
  HEADER_MENU_ITEMS,
  HEADER_SEARCH_PLACEHOLDER,
} from "../../helpers";
import { CartItem, DeliveryMap } from "..";

export interface HeaderProps {
  testId?: string;
  className?: string;
}

export function Header({ testId, className }: HeaderProps): JSX.Element {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const toggleCartHandler = () => setIsCartOpen((prev) => !prev);
  const toggleAddressHandler = () => setIsAddressOpen((prev) => !prev);
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <div className={styles["wrapper-desktop-only"]}>
        <Logo />
        <div className={styles["flex-wrapper"]}>
          <PinSmallIcon />
          <Typography testId="delivery-title" onClick={toggleAddressHandler}>
            {HEADER_DELIVERY_TITLE}
          </Typography>
          <div className={styles["menu-wrapper"]}>
            {HEADER_MENU_ITEMS.map((item, index) => (
              <StyledLink
                key={item.id}
                testId={`menu-item-${index}`}
                href={item.slug}
              >
                {item.name}
              </StyledLink>
            ))}
          </div>
          <Input
            placeholder={HEADER_SEARCH_PLACEHOLDER}
            icon={<SearchIcon />}
          />
        </div>
      </div>
      <div className={styles["menu-button-mobile-only"]}>
        <IconButton testId="menu-icon" variant="primary">
          <MenuIcon />
        </IconButton>
      </div>

      <div className={styles["flex-wrapper"]}>
        <IconButton
          testId="cart-icon-button"
          variant="primary"
          onClick={toggleCartHandler}
        >
          <Badge className={styles["badge-item"]}>
            {HEADER_CART_ITEMS.length}
          </Badge>
          <CartIcon />
        </IconButton>
        <Link href="/user-profile">
          <IconButton testId="user-icon-button" variant="primary">
            <UserIcon />
          </IconButton>
        </Link>
      </div>
      {/* {isCartOpen && (
        <Cart items={HEADER_CART_ITEMS} onClose={toggleCartHandler} />
      )} */}
      {isAddressOpen && <DeliveryMap onClose={toggleAddressHandler} />}
    </div>
  );
}
