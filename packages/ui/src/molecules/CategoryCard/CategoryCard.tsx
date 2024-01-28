import React from "react";
import styles from "./CategoryCard.module.css";
import Image from "next/image";
import { Typography } from "../../atoms";

export interface Category {
  image: string;
  title: string;
}
export interface CategoryCardProps {
  testId?: string;
  className?: string;
  category: Category;
}

export function CategoryCard({
  category,
  testId,
  className,
}: CategoryCardProps): JSX.Element {
  const { image, title } = category;
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className={styles.image}
      />
      <Typography testId="category-card-title" className={styles.title}>
        {title}
      </Typography>
    </div>
  );
}
