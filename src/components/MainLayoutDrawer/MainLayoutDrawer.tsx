import { NavLink } from "react-router-dom";

import Logo from "../Logo";
import SearchInput from "../SearchInput";
import MainLayoutDrawerList from "./MainLayoutDrawerList";
import Avatar from "../ui/Avatar";
import ExitIcon from "../icons/ExitIcon";
import store, { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import WorkTask from "../CreateWorkSpace/WorkTask";

function MainLayoutDrawer() {
  const auth = useSelector((state: RootState) => state.auth);

  function logoutUser() {
    store.dispatch(logout());
  }

  return (
    <div className=" border-l-[1px] border-[#AAAAAA] w-96 p-8">
      <div className="flex flex-col h-[calc(100vh-64px)]">
        <div>
          <Logo />
        </div>
        <div className="mt-8 font-semibold">
          <h4>ورک اسپیس ها</h4>
        </div>
        <div className="mt-3">
          <SearchInput placeholder="جستجو کنید" />
        </div>

        <WorkTask />
        <div className="flex-1 overflow-auto">
          <MainLayoutDrawerList />
        </div>
        <NavLink to="/user/personal">
          <button className="flex items-center gap-2 my-2">
            <Avatar alt={auth?.user?.username[0].toUpperCase()} />
            <span>{auth.user?.username}</span>
          </button>
        </NavLink>
        <button
          className="flex items-center gap-2"
          onClick={() => logoutUser()}
        >
          <div className="w-9 h-9 flex items-center justify-center">
            <ExitIcon className="stroke-gray" />
          </div>
          <span className="text-gray">خروج</span>
        </button>
      </div>
    </div>
  );
}

export default MainLayoutDrawer;
