"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./StyledLink.module.css";

export interface StyledLinkProps {
  children: React.ReactNode;
  testId?: string;
  className?: string;
  href: string;
}

export function StyledLink({
  children,
  testId,
  className,
  href,
  ...props
}: StyledLinkProps): JSX.Element {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      data-testid={testId}
      className={`${styles.container} ${className} ${isActive ? styles.active : ""}`}
      {...props}
    >
      {children}
    </Link>
  );
}
