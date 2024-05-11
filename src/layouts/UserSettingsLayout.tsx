import { Outlet } from "react-router-dom";

import UserSettingsDrawer from "../components/UserSettingsDrawer";

function UserSettingsLayout() {
  return (
    <div className="bg-gray-light w-screen h-screen flex flex-row">
      <UserSettingsDrawer />
      <div className="p-4 w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default UserSettingsLayout;
