import React from "react";
import * as S from "./PromoBlock.styled";
import { TruckSmallOutline } from "../../icons";
import { Circle } from "../../atoms";

export interface PromoCardProps {
  testId?: string;
  className?: string;
}

export function PromoBlock({ testId, className }: PromoCardProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <Circle>
        <TruckSmallOutline />
      </Circle>
      <S.PromoBody>
        <S.PromoTitle testId="promo-title">Free delivery</S.PromoTitle>
        <S.PromoDetails testId="promo-details">
          all orders from $20
        </S.PromoDetails>
      </S.PromoBody>
    </S.Container>
  );
}
