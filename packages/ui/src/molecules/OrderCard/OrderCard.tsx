import React from "react";
import * as S from "./OrderCard.styled";
import { IconButton, Price, Typography } from "../../atoms";
import { DollarIcon, PinSmallIcon } from "../../icons";

export interface OrderCardProps {
  testId?: string;
  className?: string;
}

export function OrderCard({ testId, className }: OrderCardProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <S.Body>
        <S.Label testId="date-label">23/08/2022</S.Label>
        <Typography testId="date-label">BurgerKing</Typography>
        <S.LabelDark testId="date-label">
          King Bucket Shrimps,Big Strawberry Milkshake (Order block)
        </S.LabelDark>
        <S.FlexWrapperSmall>
          <S.PinIcon />
          <S.Label testId="date-label">
            Biscuit Factory, Studio Cc212, The, Drummond Rd, London
          </S.Label>
        </S.FlexWrapperSmall>
      </S.Body>
      <S.FlexWrapperSmall>
        <IconButton variant="secondary">
          <DollarIcon />
        </IconButton>
        <Price>$5</Price>
      </S.FlexWrapperSmall>
    </S.Container>
  );
}
