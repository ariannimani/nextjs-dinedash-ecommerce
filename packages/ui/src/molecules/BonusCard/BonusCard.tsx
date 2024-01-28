import React from "react";
import styles from "./BonusCard.module.css";
import { Button, Typography } from "../../atoms";
import { GiftIcon } from "../../icons";

export interface BonusCardProps {
  testId?: string;
  className?: string;
  title: string;
  content: string;
  buttonTitle: string;
}

export function BonusCard({
  testId,
  className,
  title,
  content,
  buttonTitle,
}: BonusCardProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <Typography testId="bonus-title" className={styles.title}>
        {title}
      </Typography>
      <Typography testId="bonus-content" className={styles.content}>
        {content}
      </Typography>
      <Button
        variant="tertiary"
        onClick={() => {}}
        className={styles.button}
        icon={<GiftIcon />}
      >
        {buttonTitle}
      </Button>
    </div>
  );
}
