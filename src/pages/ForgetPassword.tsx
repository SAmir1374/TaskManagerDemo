import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import TextInput from "../components/ui/TextInput";

type ForgetPasswordFormData = {
  email: string;
};

function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordFormData>();

  const navigate = useNavigate();

  function handleSubmitForm(data: ForgetPasswordFormData) {
    console.log(data);
    navigate("/forget-password-confirm");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[400px] m-2">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          فراموشی رمز عبور
        </h1>
        <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-7">
          <TextInput
            label="ایمیل خود را وارد کنید"
            className="w-full"
            register={register("email", {
              required: "این فیلد الزامی است!",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "ایمیل به درستی وارد نشده است!",
              },
            })}
            containerClassName="mb-4"
            name="email"
            hint={errors.email?.message}
          />

          <Button className="w-full" type="submit">
            دریافت ایمیل بازیابی رمز عبور
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default ForgetPassword;
