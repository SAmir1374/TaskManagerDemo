import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectCreateProjectRequestBody = {
  name: string;
  workspaceId: string;
  members: string[];
};

type ProjectCreateProjectResponseBody = ResponseBody<{
  name: string;
  workspace: string; // workspace _id
  members: [
    {
      _id: string; // user _id
      username: string;
      email: string;
      role: string;
    }
  ];
  _id: string; // Project _id//id
}>;

export function ProjectCreateProject() {
  async function projectCreateProject(
    incomingData: ProjectCreateProjectRequestBody
  ): Promise<ProjectCreateProjectResponseBody> {
    const { data } = await AXIOS.post("/createproject", incomingData);
    return data;
  }

  return useMutation((data: ProjectCreateProjectRequestBody) =>
    projectCreateProject(data)
  );
}
