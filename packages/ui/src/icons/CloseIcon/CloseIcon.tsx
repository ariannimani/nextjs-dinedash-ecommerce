import React from "react";

export interface CloseIconProps {
  className?: string;
  onClick?: () => void;
}

const CloseIcon = ({ className, onClick }: CloseIconProps): JSX.Element => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      onClick={onClick}
    >
      <path d="M11.9999 10.5857L5.6359 4.22168L4.22168 5.6359L10.5857 11.9999L4.22168 18.3639L5.6359 19.7781L11.9999 13.4141L18.3639 19.7781L19.7781 18.3639L13.4141 11.9999L19.7781 5.6359L18.3639 4.22168L11.9999 10.5857Z" />
    </svg>
  );
};

export default CloseIcon;
