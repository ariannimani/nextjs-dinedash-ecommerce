import React from "react";
import * as S from "./CategoryCard.styled";
import Image from "next/image";

export interface CategoryCardProps {
  image: string;
  testId?: string;
  className?: string;
  alt: string;
  title: string;
}

export function CategoryCard({
  image,
  testId,
  className,
  alt,
  title,
}: CategoryCardProps): JSX.Element {
  return (
    <S.Container data-testid={testId} className={className}>
      <img
        src="https://s3-alpha-sig.figma.com/img/0a38/a0be/904ed15a051977f173333b5359abada4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EKBTfWN31V8kyMYtJrfu4a9gyH2RjsFM6JXqog6caVxuxepEWPidIu87n3cXL2wz7wAt71BkQFVeghWpbq8qysj6F390LLePzJ70BUa2FCCUUf1r6UgRcDPFeLQzbtJcVyLD-uopNPy1nDMNh41lNG8o4sJOcDbNi0~vylfEVk6ACTYI2wzUfi-fo1euKWv2XZD-Zp~9Nh9pnqb5rVUtpZDM5ahRPPXhAHDjFV7y20F~P1a7cP5Q4pH8NpWDFdVg9V4~Yuiu~AcEMm99brFXyxGvpmZvApPu2M5UrpSyO6Apqft1nHrnhahjWG1znUFF0pZeZEeQxNNTVlbYxw3Kbw__"
        alt={alt}
        width="100%"
        height="100%"
      />
      <S.CategoryTitle testId="category-title">{title}</S.CategoryTitle>
    </S.Container>
  );
}
