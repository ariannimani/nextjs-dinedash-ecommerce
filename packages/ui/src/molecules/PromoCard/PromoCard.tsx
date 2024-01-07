import React from "react";
import * as S from "./PromoCard.styled";
import { Button } from "../../atoms";

export interface PromoCardProps {
  testId?: string;
  className?: string;
  image: string;
  alt: string;
  details: string;
  title: string;
  buttonTitle: string;
}

export function PromoCard({
  testId,
  className,
  image,
  alt,
  details,
  title,
  buttonTitle,
}: PromoCardProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <S.ImageCard src={image} alt={alt} />
      <S.Body>
        <S.TextContainer>
          <S.OfferTitle testId="offer-title">{title}</S.OfferTitle>
          <S.OfferDetails testId="offer-details">{details}</S.OfferDetails>
        </S.TextContainer>
        <S.DiscoverButton variant="primary" onClick={() => {}}>
          {buttonTitle}
        </S.DiscoverButton>
      </S.Body>
    </S.Container>
  );
}
