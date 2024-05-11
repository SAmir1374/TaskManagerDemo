import React from "react";

function IconButton({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return <button {...props}>{children}</button>;
}

export default IconButton;
