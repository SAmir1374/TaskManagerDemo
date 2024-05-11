import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectDeleteProjectResponseBody = ResponseBody<{
  _id: string; //id
  name: string;
  workspace: string;
  members: string[];
  boards: [];
  __v: number;
}>;

export function ProjectDeleteProject(id: string) {
  async function projectDeleteProject(): Promise<ProjectDeleteProjectResponseBody> {
    const { data } = await AXIOS.delete(`/project/deleteproject/${id}`);
    return data;
  }

  return useMutation(() => projectDeleteProject());
}
