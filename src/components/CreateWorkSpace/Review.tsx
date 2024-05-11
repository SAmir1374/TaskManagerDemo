import Button from "../ui/Button";
import Avatar from "../ui/Avatar";

type Props = {
  name?: string;
  color?: string;
  onSubmit?: () => void;
};

function Review({ name, color, onSubmit }: Props) {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full gap-4 border border-gray rounded-md p-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">نام ورک اسپیس</h3>
          <p>{name}</p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">رنگ ورک اسپیس</h3>
          <div className={`w-4 h-4 rounded-md ${color}`}></div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">اعضا</h3>
          <Avatar />
        </div>
      </div>
      <Button onClick={onSubmit} className="w-full mt-4 mx-auto">
        ساختن ورک اسپیس
      </Button>
    </div>
  );
}

export default Review;
