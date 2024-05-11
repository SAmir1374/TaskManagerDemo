import { useForm } from "react-hook-form";

import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { useSelector } from "react-redux";
import store, { RootState } from "../../redux/store";
import { useEffect } from "react";
import { UserUpdateUserById } from "../../api/User/UpdateUserById";
import toast from "react-hot-toast";
import { updateUser } from "../../redux/slices/authSlice";

type RegisterFormData = {
  email?: string;
  username: string;
  password: number;
};

function Account() {
  const auth = useSelector((state: RootState) => state.auth);
  const { mutate, isSuccess } = UserUpdateUserById(auth.user?._id || "");

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onTouched",
  });

  useEffect(() => {
    if (auth) {
      setValue("email", auth.user?.email || "");
      setValue("username", auth.user?.username || "");
    }
  }, [auth]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("اطلاعات کاربر با موفقیت به روز رسانی شد.");
    }
  }, [isSuccess]);

  function handleSubmitForm(data: RegisterFormData) {
    mutate({
      email: data.email,
    });
    store.dispatch(
      updateUser({
        email: data.email,
      })
    );
  }

  return (
    <div className="flex flex-col items-start justify-start pt-24 pr-14">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-8">
        اطلاعات حساب
      </h1>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-7 w-80">
        <TextInput
          label="ایمیل"
          className="w-full"
          register={register("email", {
            required: "این فیلد الزامی است!",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "ایمیل به درستی وارد نشده است!",
            },
          })}
          name="email"
          hint={errors.email?.message}
          containerClassName="mb-4"
        />
        <div className="relative">
          <TextInput
            type="password"
            label="رمز عبور"
            className="w-full"
            register={register("password", {
              min: 8,
              // required: "این فیلد الزامی است!",
            })}
            name="password"
            hint={errors.password?.message}
            containerClassName="mb-4"
          />
          <Button
            type="button"
            className="absolute top-5 left-0 h-11 rounded-none rounded-l-lg"
          >
            احراز هویت
          </Button>
        </div>
        <TextInput
          type="text"
          label="نام کاربری"
          className="w-full"
          register={register("username", {
            required: "این فیلد الزامی است!",
          })}
          name="username"
          hint={errors.username?.message}
          containerClassName="mb-4"
        />
        <Button className="w-full mt-8" type="submit">
          ثبت تغییرات
        </Button>
      </form>
    </div>
  );
}

export default Account;
