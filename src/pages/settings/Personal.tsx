import { useForm } from "react-hook-form";

import FileInput from "../../components/ui/FileInput";
import TextInput from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { useSelector } from "react-redux";
import store, { RootState } from "../../redux/store";
import { useEffect } from "react";
import { UserUpdateUserById } from "../../api/User/UpdateUserById";
import { toast } from "react-hot-toast";
import { updateUser } from "../../redux/slices/authSlice";

type RegisterFormData = {
  name: string;
  lastName: string;
  mobile: string;
};

function Personal() {
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
      setValue("name", auth.user?.firstname || "");
      setValue("mobile", auth.user?.phone || "");
      setValue("lastName", auth.user?.lastname || "");
    }
  }, [auth]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("اطلاعات کاربر با موفقیت به روز رسانی شد.");
    }
  }, [isSuccess]);

  function handleSubmitForm(data: RegisterFormData) {
    mutate({
      firstname: data.name,
      lastname: data.lastName,
      email: auth.user?.email || "",
    });
    store.dispatch(
      updateUser({
        firstname: data.name,
        lastname: data.lastName,
      })
    );
  }

  return (
    <div className="flex flex-col items-start justify-start pt-24 pr-14">
      <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl pb-4">
        اطلاعات فردی
      </h1>
      <FileInput />
      <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-5 w-80">
        <TextInput
          type="text"
          label="نام"
          className="w-full"
          register={register("name", {
            required: "این فیلد الزامی است!",
          })}
          name="name"
          hint={errors.name?.message}
          containerClassName="mb-4"
        />
        <TextInput
          type="text"
          label="نام خانوادگی"
          className="w-full"
          register={register("lastName", {
            required: "این فیلد الزامی است!",
          })}
          name="lastName"
          hint={errors.lastName?.message}
          containerClassName="mb-4"
        />
        <TextInput
          type="tell"
          label="شماره موبایل"
          className="w-full"
          register={register("mobile", {
            maxLength: {
              value: 11,
              message: "شماره همراه باید ۱۱ رقم باشد!",
            },
            minLength: {
              value: 11,
              message: "شماره همراه باید ۱۱ رقم باشد!",
            },
            pattern: {
              value: /^\d+$/,
              message: "در این فیلد باید مقادیر عددی وارد شود",
            },
            required: "این فیلد الزامی است!",
          })}
          name="mobile"
          hint={errors.mobile?.message}
          containerClassName="mb-4"
        />
        <Button className="w-full mt-8" type="submit">
          ثبت تغییرات
        </Button>
      </form>
    </div>
  );
}

export default Personal;
