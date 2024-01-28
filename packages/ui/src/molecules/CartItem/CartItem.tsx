import React from "react";
import styles from "./CartItem.module.css";
import { IconButton, Typography } from "../../atoms";
import { convertCurrency } from "../../helpers";
import { TrashIcon } from "../../icons";
import Image from "next/image";
import { Quantifier } from "..";

export interface ItemProps {
  image: string;
  title: string;
  quantity: number;
  price: number;
}
export interface CartItemProps {
  item: ItemProps;
  testId?: string;
  className?: string;
}

export function CartItem({
  item,
  testId,
  className,
}: CartItemProps): JSX.Element {
  const { image, title, quantity, price } = item;

  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <div className={styles.content}>
        <div className={styles.details}>
          <Typography testId="cart-item-title" className={styles.title}>
            {title}
          </Typography>
          <Typography testId="cart-item-price" className={styles.title}>
            {convertCurrency(price)}
          </Typography>
        </div>
        <div className={styles.footer}>
          <Quantifier quantity={quantity} />
          <IconButton variant="secondary">
            <TrashIcon />
          </IconButton>
        </div>
      </div>
      <Image
        src={image}
        alt={title}
        className={styles.image}
        width={88}
        height={88}
      />
    </div>
  );
}
