import React from "react";
import { RegisterOptions } from "react-hook-form";
import Button from "./Button";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  hint?: string;
  buttonClassName?: string;
  containerClassName?: string;
  onClick?: () => void;
  register?: {
    name: string;
    options?: RegisterOptions | undefined;
  };
}

function InputButton({
  hint,
  className,
  buttonClassName,
  containerClassName,
  onClick,
  register,
  ...props
}: Props) {
  return (
    <form
      className={`flex flex-col justify-center items-start relative ${containerClassName}`}
    >
      <input
        {...register}
        placeholder="دعوت با ایمیل"
        className={`border-solid  border rounded-lg focus:outline-primary w-full h-11 p-2 bg-lightGray ${
          hint ? "border-error" : "border-gray"
        } ${className}`}
        {...props}
      />
      <Button
        onClick={onClick}
        type="submit"
        className={`absolute top-0 left-0 w-20 h-11 rounded-none rounded-l-lg bg-primary ${buttonClassName}`}
      >
        ارسال
      </Button>
      {hint && <span className="text-xs mt-1 text-error">{hint}</span>}
    </form>
  );
}

export default InputButton;
