import { SVGProps } from "react";

function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.00977 12.4805H18.9998"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.013 6.48828L4.00195 12.5003L10.013 18.5123"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default ArrowLeftIcon;
