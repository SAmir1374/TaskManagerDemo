import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectRemoveMemberFromProjectResponseBody = ResponseBody<{
  projectId: string; //id
  username: string;
  userId: string;
}>;

export function ProjectRemoveMemberFromProject(
  projectId: string,
  usernameOrId: string
) {
  async function projectRemoveMemberFromProject(): Promise<ProjectRemoveMemberFromProjectResponseBody> {
    const { data } = await AXIOS.delete(
      `/projects/:${projectId}/members/:${usernameOrId}`
    );
    return data;
  }

  return useMutation(() => projectRemoveMemberFromProject());
}
