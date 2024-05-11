import { Link } from "react-router-dom";

import useRouteIsActive from "../hooks/useRouteIsActive";
import { PropsWithChildren } from "react";

/* -------------------------------------------------------------------------- */
/*                                     Type                                   */
/* -------------------------------------------------------------------------- */
export interface ListItemType extends PropsWithChildren {
  id: number | string;
  title?: string;
  to: string;
  icon?: JSX.Element;
  className?: string;
  customActiveChecker?: string;
}

function ListItem({
  title,
  to,
  icon,
  className,
  children = null,
  customActiveChecker,
}: ListItemType) {
  /* -------------------------------------------------------------------------- */
  /*                                    hook                                    */
  /* -------------------------------------------------------------------------- */
  const isActive = useRouteIsActive(
    customActiveChecker ? customActiveChecker : to
  );
  if (children) {
    return (
      <Link
        to={to}
        className={`flex gap-2 align-middle p-1 
       ${isActive && "bg-blue-light"}
       ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`flex gap-2 align-middle p-1 
       ${isActive && "bg-blue-light"}
       ${className}`}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

export default ListItem;
