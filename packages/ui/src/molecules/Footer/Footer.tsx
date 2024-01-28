import React from "react";
import styles from "./Footer.module.css";
import { IconButton, Logo, Typography } from "../../atoms";
import { COPYRIGHT, FOOTER_MENU_LIST, FOOTER_TEXT } from "../../helpers";
import { FacebookIcon, TwitterIcon } from "../../icons";

export interface FooterProps {
  testId?: string;
  className?: string;
}

export function Footer({ testId, className }: FooterProps): JSX.Element {
  return (
    <div data-testid={testId} className={className}>
      <div className={`${styles.footer} ${styles["top-footer"]}`}>
        <Logo />
        <div className={styles["flex-wrapper"]}>
          <Typography>{FOOTER_TEXT}</Typography>
          <IconButton variant="primary">
            <FacebookIcon />
          </IconButton>
          <IconButton variant="primary">
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
      <div className={`${styles.footer} ${styles["bottom-footer"]}`}>
        <div className={styles["menu-container"]}>
          {FOOTER_MENU_LIST.map((item, index) => (
            <Typography
              key={index}
              testId={`menu-list-${index}`}
              className={styles.text}
            >
              {item}
            </Typography>
          ))}
        </div>
        <Typography testId="copyright" className={styles["copyright-text"]}>
          {COPYRIGHT}
        </Typography>
      </div>
    </div>
  );
}
