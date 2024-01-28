"use client";

import React, { useState } from "react";
import styles from "./ToggleSwitch.module.css";

export interface ToggleSwitchProps {
  testId?: string;
  className?: string;
}

export function ToggleSwitch({
  testId,
  className,
}: ToggleSwitchProps): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div data-testid={testId} className={`${styles.container} ${className}`}>
      <div className={styles["toggle-button"]} onClick={handleToggle}>
        <div
          className={`${styles["toggle-ball"]} ${isActive ? styles.active : ""}`}
        ></div>
      </div>
    </div>
  );
}
