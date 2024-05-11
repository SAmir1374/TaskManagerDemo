import { useMutation, useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

export type ProjectBoardType = {
  board: string;
  position: number;
  _id: string;
};

type ProjectGetProjectByIdResponseBody = ResponseBody<{
  _id: string; //id
  name: string;
  workspace: string;
  members: [
    {
      user: {
        _id: string;
        username: string;
        firstname: string;
        lastname: string;
        email: string;
        profile_url: string;
      };
      role: string;
    }
  ];
  boards: ProjectBoardType[];
}>;

export function ProjectGetProjectById(id: string) {
  async function projectGetProjectById(): Promise<ProjectGetProjectByIdResponseBody> {
    const { data } = await AXIOS.get(`/projects/${id}`);
    return data;
  }

  return useQuery(["getUserByUserNameOrId", id], projectGetProjectById, {
    enabled: false,
  });
}
