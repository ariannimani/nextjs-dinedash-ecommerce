"use client";
import React from "react";
import styles from "./DeliveryMap.module.css";
import { Button, Input, Typography } from "../../atoms";
import { MAP_TITLE } from "../../helpers";
import { CloseIcon, PinSmallIcon, TickIcon } from "../../icons";
import { useIsMobile } from "../../hooks";

export interface DeliveryMapProps {
  testId?: string;
  className?: string;
  onClose: () => void;
}

export function DeliveryMap({
  testId,
  className,
}: DeliveryMapProps): JSX.Element {
  // const isMobile = useIsMobile();

  const isMobile = false;
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <div className={styles.header}>
        <div className={styles["flex-wrapper"]}>
          <Typography testId="delivery-map-title" className={styles.title}>
            {MAP_TITLE}
          </Typography>
          <CloseIcon className={styles.close} />
        </div>
        <div className={styles["flex-wrapper"]}>
          <Input className={styles["input-address"]} icon={<PinSmallIcon />} />
          <Button
            variant="primary"
            onClick={() => {}}
            className={styles.button}
          >
            {isMobile ? <TickIcon /> : "Deliver Here"}
          </Button>
        </div>
      </div>
      <div className={styles["map-container"]}></div>
    </div>
  );
}
