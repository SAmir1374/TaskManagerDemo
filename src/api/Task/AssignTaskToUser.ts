import { useMutation } from "@tanstack/react-query";
import { ResponseBody } from "../Types";
import AXIOS from "../../utils/axios";

type TaskAssignTaskToUserResponseBody = ResponseBody<{
    "task": {
        "_id": string,
        "name": string,
        "description": string,
        "label": string[],
        "board": string,
        "taskTags": string[],
        "taskAssigns": [
            {
                "user": {
                    "_id": string,
                    "username": string
                }
            }
        ],
        "comments": string[
        ],
        "position": number
    },
    "user": {
        "username": string,
        "_id": string
    }
}>

export function TaskAssignTaskToUser(taskId:string,usernameOrId:string) {
    async function taskAssignTaskToUser(
    ): Promise<TaskAssignTaskToUserResponseBody> {
      const { data } = await AXIOS.put(`/task/:${taskId}/assign/:${usernameOrId}`);
      return data;
  }
  
    return useMutation(() => taskAssignTaskToUser());
}