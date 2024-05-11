import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type TaskUnassignTaskFromUserResponseBody = ResponseBody<null>


export function TaskUnassignTaskFromUser(taskId:string,usernameOrId:string) {
    async function taskUnassignTaskFromUser(
    ): Promise<TaskUnassignTaskFromUserResponseBody> {
      const { data } = await AXIOS.delete(`/task/:${taskId}/assign/:${usernameOrId}`);
      return data;
  }
  
    return useMutation(() => taskUnassignTaskFromUser());
}