import { Tab } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";

import DotListIcon from "../icons/DotListIcon";
import ColumnArtBoardIcon from "../icons/ColumnArtBoardIcon";
import CalendarScheduleIcon from "../icons/CalendarScheduleIcon";
import ShareIcon from "../icons/ShareIcon";
import { TabTypes } from "../../layouts/MainLayout";

type MainLayoutAppBarTabItem = {
  id: TabTypes;
  title: string;
  icon: React.ReactNode;
  to: string;
};

type MainLayoutAppBarPropsType = {
  selectedTab: TabTypes;
  onChange: (tab: TabTypes) => void;
};

function MainLayoutAppBar({
  selectedTab,
  onChange,
}: MainLayoutAppBarPropsType) {
  const navigate = useNavigate();
  const { id } = useParams();

  const tabItems: MainLayoutAppBarTabItem[] = [
    {
      id: "list",
      title: "نمایش لیستی",
      icon: <DotListIcon />,
      to: `/projects/${id}/list`,
    },
    {
      id: "column",
      title: "نمایش ستونی",
      icon: <ColumnArtBoardIcon />,
      to: `/projects/${id}/column`,
    },
    {
      id: "calendar",
      title: "تقویم",
      icon: <CalendarScheduleIcon />,
      to: `/projects/${id}/calendar`,
    },
  ];
  function handleTabClick(tabItem: MainLayoutAppBarTabItem) {
    onChange(tabItem.id);
    navigate(tabItem.to);
  }
  return (
    <div className="flex items-center mt-5 border-b border-gray">
      <div className="flex gap-2 flex-1 items-center">
        <span className="font-semibold text-xl">پروژه اول</span>
        <div className="w-[1px] bg-gray h-8 mx-2" />
        <Tab.Group>
          <Tab.List className="flex items-center">
            {tabItems.map((tabItem) => {
              return (
                <>
                  <Tab key={tabItem.id} className="focus:outline-none">
                    <button
                      className={`flex gap-1 h-14 items-center justify-center ${
                        selectedTab === tabItem.id
                          ? "border-b-2 border-primary text-primary stroke-primary"
                          : "stroke-gray-dark"
                      }`}
                      onClick={() => handleTabClick(tabItem)}
                    >
                      {tabItem.icon}
                      {tabItem.title}
                    </button>
                  </Tab>
                  <div className="w-[1px] bg-gray h-8 mx-2" />
                </>
              );
            })}
          </Tab.List>
        </Tab.Group>
      </div>
      <button className="flex items-center justify-center">
        <ShareIcon className="stroke-gray-dark" />
        <span>اشتراک‌گذاری</span>
      </button>
    </div>
  );
}

export default MainLayoutAppBar;
