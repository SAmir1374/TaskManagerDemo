import Card from "../components/ui/Card";

const ForgetPasswordConfirm = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[400px] m-2">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
          فراموشی رمز عبور
        </h1>
        <p className="text-center mt-6">
          لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
        </p>
      </Card>
    </div>
  );
};

export default ForgetPasswordConfirm;
