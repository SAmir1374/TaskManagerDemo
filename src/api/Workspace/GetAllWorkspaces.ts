import { useQuery } from "@tanstack/react-query";
import { ResponseBody } from "../Types";
import AXIOS from "../../utils/axios";

// TODO: remove this here and get from it's correct type.
export type WorkspaceProjectType = {
  _id: string;
  name: string;
  members: string[];
  boards: [];
};
export type WorkspaceGetAllResponseBody = {
  _id: string;
  name: string;
  user: string;
  members: [];
  projects: WorkspaceProjectType[];
};

type WorkspaceGetAllResponse = ResponseBody<WorkspaceGetAllResponseBody[]>;

export function WorkspaceGetAll() {
  async function workspaceGetAll(): Promise<WorkspaceGetAllResponse> {
    const { data } = await AXIOS.get("/workspace/get-all");
    return data;
  }
  return useQuery(["WorkspaceGetAll"], workspaceGetAll);
}
