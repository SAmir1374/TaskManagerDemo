import { SVGProps } from "react";

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.48047 12.48H19.4705"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4834 6.48804L19.5204 12.5L13.4834 18.512"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default ArrowRightIcon;
