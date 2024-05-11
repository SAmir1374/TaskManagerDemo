import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectAddMemberToProjectResponseBody = ResponseBody<{
  projectId: string; //id
  userId: string;
}>;

export function ProjectAddMemberToProject() {
  async function projectAddMemberToProject(
    projectId: string,
    userId: string
  ): Promise<ProjectAddMemberToProjectResponseBody> {
    const { data } = await AXIOS.put(
      `/projects/:${projectId}/members/:${userId}`
    );
    return data;
  }

  return useMutation(
    (data: {
      projectId: string; //id
      userId: string;
    }) => projectAddMemberToProject(data.projectId, data.userId)
  );
}
