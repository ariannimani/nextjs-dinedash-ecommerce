import React from "react";
import styles from "./DeliveryDetails.module.css";
import { Typography } from "../../atoms";
import { InputWithLabel, TextAreaWithLabel } from "../../molecules";

export interface DeliveryDetailsProps {
  testId?: string;
  className?: string;
}

const TITLE = "Details Info";

export function DeliveryDetails({
  testId,
  className,
}: DeliveryDetailsProps): JSX.Element {
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <Typography testId="delivery-details-title" className={styles.title}>
        {TITLE}
      </Typography>
      <div className={styles["flex-wrapper"]}>
        <InputWithLabel label="Name" placeholder="Name" />
        <InputWithLabel label="Phone" placeholder="Phone" />
      </div>
      <div className={styles["flex-wrapper"]}>
        <InputWithLabel
          label="Delivery Address"
          placeholder="Delivery Address"
        />
        <div className={styles["flex-wrapper-small"]}>
          <InputWithLabel label="Intercom" placeholder="Intercom" />
          <InputWithLabel label="Floor" placeholder="Floor" />
          <InputWithLabel label="Apartment" placeholder="Apartment" />
        </div>
      </div>
      <TextAreaWithLabel
        label="Additional info (.opt)"
        placeholder="Additional Info"
      />
    </div>
  );
}
