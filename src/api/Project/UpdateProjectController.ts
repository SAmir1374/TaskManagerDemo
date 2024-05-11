import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type ProjectUpdateProjectControllerRequestBody = {
  name: string;
};

type ProjectUpdateProjectControllerResponseBody = ResponseBody<{
  _id: string; //id
  name: string;
  workspace: string;
  members: string[];
  boards: [];
}>;

export function ProjectUpdateProjectController(id: string) {
  async function projectUpdateProjectController(
    incomingData: ProjectUpdateProjectControllerRequestBody
  ): Promise<ProjectUpdateProjectControllerResponseBody> {
    const { data } = await AXIOS.put(`/projects/:${id}`, incomingData);
    return data;
  }

  return useMutation((data: ProjectUpdateProjectControllerRequestBody) =>
    projectUpdateProjectController(data)
  );
}
