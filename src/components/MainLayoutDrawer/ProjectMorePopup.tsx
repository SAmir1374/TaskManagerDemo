import EditPenIcon from "../icons/EditPenIcon";
import LinkIcon from "../icons/LinkIcon";
import PlusIconNoBorderIcon from "../icons/PlusIconNoBorderIcon";
import ShareIcon from "../icons/ShareIcon";
import TrashIcon from "../icons/TrashIcon";
import Button from "../ui/Button";
import Card from "../ui/Card";
import PopupButton, { PopupButtonProps } from "./PopupButton";

const popupData: PopupButtonProps[] = [
  {
    title: "ساختن تسک جدید",
    icon: <PlusIconNoBorderIcon className="stroke-black" />,
    onClick: () => console.log("hi"),
  },
  {
    title: "ویرایش نام پروژه",
    icon: <EditPenIcon className="stroke-black" />,
  },
  {
    title: "کپی لینک",
    icon: <LinkIcon />,
  },
  {
    title: "حذف",
    icon: <TrashIcon className="stroke-red-500" />,
    textClassName: "text-red-500",
  },
];

function ProjectMorePopup() {
  return (
    <Card className="!px-3 !py-4">
      <div className="flex gap-1 flex-col">
        {popupData.map((popupDataItem) => {
          return (
            <PopupButton
              title={popupDataItem.title}
              icon={popupDataItem.icon}
              onClick={popupDataItem.onClick}
              className={popupDataItem.className}
              textClassName={popupDataItem.textClassName}
            />
          );
        })}
      </div>
      <Button className="w-full text-right flex gap-1">
        <ShareIcon className="stroke-white" />
        <span>اشتراک‌گذاری</span>
      </Button>
    </Card>
  );
}

export default ProjectMorePopup;
