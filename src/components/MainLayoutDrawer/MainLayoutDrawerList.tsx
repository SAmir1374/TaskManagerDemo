import { Disclosure, Popover } from "@headlessui/react";
import ListItem from "../ListItem";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import DotsMenuIcon from "../icons/DotsMenuIcon";
import WorkspaceMorePopup from "./WorkspaceMorePopup";
import ProjectMorePopup from "./ProjectMorePopup";

function MainLayoutDrawerList() {
  const workspaces = useSelector((state: RootState) => state.workSpace);

  return (
    <div className="flex flex-col mt-4 gap-2 overflow-auto">
      {workspaces.map(({ _id, name, projects }) => (
        <Disclosure key={_id}>
          <Disclosure.Button className="py-2 text-right flex justify-between align-middle group">
            <div className="flex flex-row gap-2 items-center">
              <div className={`w-5 h-5 rounded-md bg-[#ff0000]`} />
              {name}
            </div>
            <Popover>
              <Popover.Button>
                <DotsMenuIcon className="stroke-gray invisible group-hover:visible" />
              </Popover.Button>

              <Popover.Panel className="absolute z-10">
                <WorkspaceMorePopup />
              </Popover.Panel>
            </Popover>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 pr-7 flex gap-3 flex-col">
            {projects.map((project) => {
              return (
                <ListItem
                  key={project._id}
                  id={project._id}
                  to={`/projects/${project._id}/list`}
                  customActiveChecker={`/projects/${project._id}`}
                  className="flex justify-between align-middle items-center group w-full"
                >
                  <span>{project.name}</span>
                  <Popover>
                    <Popover.Button className="flex justify-center">
                      <DotsMenuIcon className="stroke-gray invisible group-hover:visible" />
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10">
                      <ProjectMorePopup />
                    </Popover.Panel>
                  </Popover>
                </ListItem>
              );
            })}
          </Disclosure.Panel>
        </Disclosure>
      ))}
    </div>
  );
}

export default MainLayoutDrawerList;
