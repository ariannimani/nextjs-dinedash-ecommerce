import React from "react";
import * as S from "./BonusCard.styled";
import { Button, Typography } from "../../atoms";
import { GiftIcon } from "../../icons";

export interface BonusCardProps {
  testId?: string;
  className?: string;
}

export function BonusCard({ testId, className }: BonusCardProps): JSX.Element {
  return (
    <S.BonusCard data-testid={testId} className={className}>
      <Typography testId="bonus-title">Bonus points</Typography>
      <S.BonusContent testId="bonus-content">
        Every time you spend 100$, you get 1 bonus point. Bonuses can be spent
        on featured products.
      </S.BonusContent>
      <Button variant="tertiary" onClick={() => {}} icon={<GiftIcon />}>
        Send
      </Button>
    </S.BonusCard>
  );
}
