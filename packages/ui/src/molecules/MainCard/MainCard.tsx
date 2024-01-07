import React from "react";
import * as S from "./MainCard.styled";
import { Tag } from "../../atoms";
import { BagIcon, ClockIcon, HeartIcon, StarOutlineIcon } from "../../icons";

export interface MainCardProps {
  image: string;
  testId?: string;
  className?: string;
  alt: string;
  raiting: string;
  title: string;
  preparationTime: string;
  price: string;
}

export function MainCard({
  image,
  testId,
  className,
  alt,
  raiting,
  title,
  preparationTime,
  price,
}: MainCardProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <img src={image} alt={alt} width="100%" height="65%" />
      <S.Header>
        <Tag variant="primary" icon={<StarOutlineIcon />}>
          {raiting}
        </Tag>
        <S.FavoriteButton variant="primary">
          <HeartIcon />
        </S.FavoriteButton>
      </S.Header>
      <S.Footer>
        <S.CardTitle testId="card-item">{title}</S.CardTitle>
        <S.FlexWrapper>
          <S.TagIcon variant="secondary" icon={<ClockIcon />}>
            {preparationTime}
          </S.TagIcon>
          <S.TagIcon variant="secondary" icon={<BagIcon />}>
            {price}
          </S.TagIcon>
        </S.FlexWrapper>
      </S.Footer>
    </S.Container>
  );
}
