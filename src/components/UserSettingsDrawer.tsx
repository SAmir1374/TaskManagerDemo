import { Link } from "react-router-dom";

import Logo from "./Logo";
import Button from "./ui/Button";
import ListItem, { ListItemType } from "./ListItem";
import EditProfileIcon from "./icons/EditProfileIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import CheckProfileIcon from "./icons/CheckProfileIcon";
import SettingsIcon from "./icons/SettingsIcon";

/* -------------------------------------------------------------------------- */
/*                                   Const                                    */
/* -------------------------------------------------------------------------- */
const listItems: ListItemType[] = [
  {
    id: 1,
    title: "اطلاعات فردی",
    to: "/user/personal",
    className: "stroke-gray-dark",
    icon: <EditProfileIcon className="stroke-gray-dark" />,
  },
  {
    id: 1,
    title: "اطلاعات حساب",
    to: "/user/account",
    className: "stroke-gray-dark",
    icon: <CheckProfileIcon className="stroke-gray-dark" />,
  },
  {
    id: 1,
    title: "تنظیمات",
    to: "/user/settings",
    className: "stroke-gray-dark",
    icon: <SettingsIcon className="stroke-gray-dark" />,
  },
];

function UserSettingsDrawer() {
  return (
    <div className=" border-l-[1px] border-[#AAAAAA] w-96 p-8">
      <div className="flex flex-col">
        <div>
          <Logo />
        </div>
        <div className="mt-16">
          <Link to="/projects">
            <Button className="flex gap-1">
              <ArrowRightIcon className="stroke-white" />
              <span>بازگشت</span>
            </Button>
          </Link>
          <div className="mt-10 flex flex-col gap-8">
            {listItems.map((listItem) => {
              return <ListItem key={listItem.id} {...listItem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettingsDrawer;
