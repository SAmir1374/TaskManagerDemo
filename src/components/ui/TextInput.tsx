import React from "react";
import { RegisterOptions } from "react-hook-form";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  hint?: string;
  containerClassName?: string;
  register?: {
    name: string;
    options?: RegisterOptions | undefined;
  };
}

function TextInput({
  label,
  hint,
  className,
  containerClassName,
  register,
  ...props
}: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-start ${containerClassName}`}
    >
      {label && (
        <label className="text-[14px] font-normal text-black">{label}</label>
      )}
      <input
        {...register}
        className={`border-solid  border rounded  focus:outline-primary p-2 ${
          hint ? "border-error" : "border-gray"
        } ${className}`}
        {...props}
      />
      {hint && <span className="text-xs mt-1 text-error">{hint}</span>}
    </div>
  );
}

export default TextInput;
