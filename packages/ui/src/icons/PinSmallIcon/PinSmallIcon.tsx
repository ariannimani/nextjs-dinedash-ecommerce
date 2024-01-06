import React from "react";

export interface PinSmallIcon {
  className?: string;
}
const PinSmallIcon = ({ className }: PinSmallIcon): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      stroke="currentColor"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.1539 10.6145C11.5134 10.6145 12.6155 9.51242 12.6155 8.15294C12.6155 6.79347 11.5134 5.69141 10.1539 5.69141C8.79445 5.69141 7.69238 6.79347 7.69238 8.15294C7.69238 9.51242 8.79445 10.6145 10.1539 10.6145Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3077 8.15385C16.3077 13.6923 10.1538 18 10.1538 18C10.1538 18 4 13.6923 4 8.15385C4 6.52174 4.64835 4.95649 5.80242 3.80242C6.95649 2.64835 8.52174 2 10.1538 2C11.7859 2 13.3512 2.64835 14.5053 3.80242C15.6593 4.95649 16.3077 6.52174 16.3077 8.15385V8.15385Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PinSmallIcon;
