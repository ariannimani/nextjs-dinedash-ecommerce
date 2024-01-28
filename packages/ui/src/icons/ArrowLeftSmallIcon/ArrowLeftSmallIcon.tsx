import React from "react";

export interface ArrowLeftSmallIconProps {
  onClick?: () => void;
  className?: string;
}

const ArrowLeftSmallIcon = ({
  onClick,
  className,
}: ArrowLeftSmallIconProps): JSX.Element => {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.24264 1.75736L3 6L7.24264 10.2426"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ArrowLeftSmallIcon;
