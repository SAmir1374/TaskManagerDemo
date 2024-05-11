import { SVGProps } from "react";
function EditPenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 9.66667V16.3333C17.5 17.2542 16.7542 18 15.8333 18H4.16667C3.24583 18 2.5 17.2542 2.5 16.3333V4.66667C2.5 3.74583 3.24583 3 4.16667 3H10"
        strokeWidth={1.20907}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 12.9998L10.125 12.6756C10.3092 12.6531 10.4808 12.569 10.6125 12.4381L16.9717 6.07896C17.6758 5.37479 17.6758 4.23313 16.9717 3.52813V3.52813C16.2675 2.82396 15.1258 2.82396 14.4208 3.52813L8.12083 9.82813C7.99333 9.95563 7.91083 10.1206 7.885 10.2998L7.5 12.9998Z"
        strokeWidth={1.20907}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default EditPenIcon;
