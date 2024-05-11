import React from "react";
import { RegisterOptions } from "react-hook-form";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  containerClassName?: string;
  hint?: string;
  register?: {
    name: string;
    options?: RegisterOptions | undefined;
  };
}

function Checkbox({
  label,
  className,
  containerClassName,
  hint,
  register,
  ...props
}: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-start my-2 ${containerClassName}`}
    >
      <div className="flex flex-row">
        <input
          {...register}
          type="checkbox"
          className={`w-5 h-5 ml-2 mb-0 accent-primary ${className}`}
          {...props}
        />
        {label && <label className="text-sm">{label}</label>}
      </div>
      {hint && <span className="text-xs my-1 text-error">{hint}</span>}
    </div>
  );
}

export default Checkbox;
