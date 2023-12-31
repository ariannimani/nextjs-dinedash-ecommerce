import React from "react";

export interface HeaderIconProps {
  className?: string;
}

const HeartIcon = ({ className }: HeaderIconProps): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17 7.55951C17 8.76233 16.5547 9.91764 15.7593 10.7723C13.9287 12.7401 12.153 14.7921 10.254 16.6887C9.81867 17.1171 9.12815 17.1014 8.7116 16.6537L3.24032 10.7723C1.58656 8.99449 1.58656 6.12451 3.24032 4.34678C4.91033 2.55157 7.63095 2.55157 9.30095 4.34678L9.49985 4.56055L9.6986 4.3469C10.4993 3.48572 11.5898 3 12.729 3C13.8681 3 14.9586 3.48568 15.7593 4.34678C16.5547 5.20146 17 6.35671 17 7.55951Z"
        stroke="#0C0C23"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HeartIcon;
