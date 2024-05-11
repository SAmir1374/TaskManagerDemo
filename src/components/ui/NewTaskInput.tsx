import TextInput from "./TextInput";
import Button from "./Button";
import { useForm } from "react-hook-form";

export type NewTaskStepOneFormDataType = {
  name: string;
};

type NewTaskInputProps = {
  onSubmit: (data: NewTaskStepOneFormDataType) => void;
};
function NewTaskInput({ onSubmit }: NewTaskInputProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTaskStepOneFormDataType>({
    mode: "onTouched",
  });

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="نام ورک اسپیس"
        containerClassName="w-full"
        className={`w-full mt-2`}
        register={register("name", {
          required: "این فیلد الزامی است!",
        })}
        hint={errors.name?.message}
      />

      <Button className="w-full mt-[60px]" type="submit">
        ادامه
      </Button>
    </form>
  );
}

export default NewTaskInput;
