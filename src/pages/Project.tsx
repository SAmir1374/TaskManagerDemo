import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectListView from "./ProjectListView";
import ProjectColumnView from "./ProjectColumnView";
import ProjectCalendarView from "./ProjectCalendarView";
import { ProjectGetProjectById } from "../api/Project/GetProjectById";
import { setProject } from "../redux/slices/projectSlice";
import store from "../redux/store";
import { GetAllProjectBoards } from "../api/Board/GetAllProjectBoards";
import { setBoards } from "../redux/slices/boardsSlice";

function Project() {
  const [id, setId] = useState("");
  const [boardType, setBoardType] = useState("");
  const { pathname } = useLocation();
  const { data: dataProject, refetch: refetchProject } =
    ProjectGetProjectById(id);
  const { data: dataBoards, refetch: refetchBoards } = GetAllProjectBoards(id);
  // const project = useSelector((state: RootState) => state.project);

  useEffect(() => {
    const pathSeparate = pathname.split("/");
    const id = pathSeparate[2];
    const boardType = pathSeparate[3];
    setBoardType(boardType);
    setId(id);
  }, [pathname]);

  useEffect(() => {
    if (id) {
      refetchProject();
      refetchBoards();
    }
  }, [id]);

  useEffect(() => {
    if (dataProject?.data) {
      store.dispatch(setProject(dataProject.data));
    }
    if (dataBoards?.data) {
      store.dispatch(setBoards(dataBoards.data));
    }
  }, [dataProject, dataBoards]);

  return (
    <div>
      {boardType === "list" && <ProjectListView />}
      {boardType === "column" && <ProjectColumnView />}
      {boardType === "calendar" && <ProjectCalendarView />}
    </div>
  );
}

export default Project;
