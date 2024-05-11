import React, { PropsWithChildren } from "react";

const Button = ({
  children,
  ...props
}: PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>) => {
  return (
    <button
      {...props}
      className={`bg-primary text-center text-white p-2.5 rounded-md ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
