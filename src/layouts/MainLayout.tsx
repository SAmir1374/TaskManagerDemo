import { Outlet, useParams } from "react-router-dom";
import MainLayoutDrawer from "../components/MainLayoutDrawer/MainLayoutDrawer";
import MainLayoutAppBar from "../components/MainLayoutAppBar/MainLayoutAppBar";
import Button from "../components/ui/Button";
import PlusIcon from "../components/icons/PlusIcon";
import { useEffect, useState } from "react";
import { WorkspaceGetAll } from "../api/Workspace/GetAllWorkspaces";
import store from "../redux/store";
import { setWorkspaces } from "../redux/slices/workspaceSlice";

export type TabTypes = "list" | "calendar" | "column" | string;

const MainLayout = () => {
  const { data } = WorkspaceGetAll();
  const { boardType } = useParams();

  const [selectedTab, setSelectedTab] = useState<TabTypes>();

  useEffect(() => {
    if (boardType) {
      setSelectedTab(boardType);
    }
  }, [boardType]);

  useEffect(() => {
    if (data?.data) {
      store.dispatch(setWorkspaces(data.data));
    }
  }, [data]);

  return (
    <div className="bg-gray-light w-screen h-screen flex flex-row">
      <MainLayoutDrawer />
      <div className="p-4 w-full overflow-auto">
        <MainLayoutAppBar
          onChange={setSelectedTab}
          selectedTab={selectedTab || "list"}
        />
        <div className="p-2">
          <Outlet />
        </div>
      </div>
      <Button className="fixed bottom-2 left-2 flex gap-1">
        <PlusIcon className="stroke-gray-light" />
        <span className="text-gray-light">تسک جدید</span>
      </Button>
    </div>
  );
};

export default MainLayout;
