import AXIOS from "../../utils/axios";
import { useMutation } from "@tanstack/react-query";
import { ResponseBody } from "../Types";

/* -------------------------------------------------------------------------- */
/*                                  createTask                                */
/* -------------------------------------------------------------------------- */

type WorkspaceCreateWorkspaceRequestBody = {
  name: string;
};

type TaskCreateTaskResponseBody = ResponseBody<null>;

export function WorkspaceCreateWorkspace() {
  async function workspaceCreateWorkspace(
    incomingData: WorkspaceCreateWorkspaceRequestBody
  ): Promise<TaskCreateTaskResponseBody> {
    const { data } = await AXIOS.post("/workspace/create/", incomingData);
    return data;
  }

  return useMutation((data: WorkspaceCreateWorkspaceRequestBody) =>
    workspaceCreateWorkspace(data)
  );
}
