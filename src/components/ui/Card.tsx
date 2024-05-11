import React, { PropsWithChildren } from "react";

import IconButton from "./IconButton";
import CloseIcon from "../icons/CloseIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

interface Props
  extends PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
  > {
  title?: string;
  titleClassName?: string;
  back?: () => void;
  close?: () => void;
}

function Card({
  title,
  titleClassName,
  className,
  children,
  back,
  close,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`rounded-2xl bg-white m-2 max-w-[520px] p-6 ${className}`}
    >
      {(title || close || back) && (
        <div className="flex flex-row w-full justify-between">
          {close ? (
            <IconButton
              children={<CloseIcon className="stroke-gray" />}
              onClick={close}
            />
          ) : (
            <div></div>
          )}

          {title ? (
            <div className={titleClassName}>
              <p>{title}</p>
            </div>
          ) : (
            <div></div>
          )}

          {back ? (
            <IconButton
              children={<ArrowLeftIcon className="stroke-gray " />}
              onClick={back}
            />
          ) : (
            <div></div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
export default Card;
