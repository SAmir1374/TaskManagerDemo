import { SVGProps } from "react";
const ArrowBottomIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={21}
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 10.5V10.5C1 5.529 5.029 1.5 10 1.5V1.5C14.971 1.5 19 5.529 19 10.5V10.5C19 15.471 14.971 19.5 10 19.5V19.5C5.029 19.5 1 15.471 1 10.5Z"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 9.5L10 12.5L7 9.5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowBottomIcon;
