import { Link, LinkProps } from "react-router-dom";

export default function QLink({ children, className, ...props }: LinkProps) {
  return (
    <Link {...props} className={`text-primary ${className}`}>
      {children}
    </Link>
  );
}
