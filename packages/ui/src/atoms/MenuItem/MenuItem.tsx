import React from "react";
import styles from "./MenuItem.module.css";
import { FireIcon, StarFilledIcon } from "../../icons";

export interface MenuItemProps {
  children: string;
  testId?: string;
  className?: string;
  active?: boolean;
}

export function MenuItem({
  children,
  testId,
  className,
  active,
}: MenuItemProps): JSX.Element {
  return (
    <div
      data-testid={testId}
      className={`${styles.container} ${className} ${active ? styles.active : ""}`}
    >
      {active ? <FireIcon /> : <StarFilledIcon className="starIcon" />}
      {children}
    </div>
  );
}
