import React from "react";
import * as S from "./Orders.styled";
import { OrderCard } from "../../molecules";
import { Button, Typography } from "../../atoms";
import { ArrowForwardIcon, NoOrderIcon } from "../../icons";

export interface OrdersProps {
  testId?: string;
  className?: string;
}

const BUTTONS = ["Restaurants", "Shops"];
const ORDERS = [1, 2, 3];
export function Orders({ testId, className }: OrdersProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <S.OrderTitle testId="details-title">My Orders</S.OrderTitle>
      <S.FlexButtons>
        {BUTTONS.map((button, index) => (
          <S.CategoryButton
            variant="primary"
            onClick={() => {}}
            active={index === 0}
          >
            {button}
          </S.CategoryButton>
        ))}
      </S.FlexButtons>
      {ORDERS.length > 0 ? (
        ORDERS.map((order) => <OrderCard key={order} />)
      ) : (
        <S.NoOrdersContainer>
          <NoOrderIcon />
          <Typography testId="no-orders">No orders yet</Typography>
        </S.NoOrdersContainer>
      )}
      <S.MoreOrdersButton variant="secondary" onClick={() => {}}>
        Show more <ArrowForwardIcon />
      </S.MoreOrdersButton>
    </S.Container>
  );
}
