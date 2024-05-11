import AXIOS from "../../utils/axios";
import { useMutation } from "@tanstack/react-query";
import { ResponseBody } from "../Types";

/* -------------------------------------------------------------------------- */
/*                                  deleteTask                                */
/* -------------------------------------------------------------------------- */


  
type TaskDeleteTaskResponseBody = ResponseBody<{
    name: string;
    description: string;
    label: [];
    board: string;
    taskTags: [];
    taskAssigns: [];
    comments: [];
    position: number;
    _id: string;
}>;
  
export function TaskDeleteTask(id:string) {
    async function taskDeleteTask(
    ): Promise<TaskDeleteTaskResponseBody> {
      const { data } = await AXIOS.delete(`/task/:${id}`);
      return data;
  }
  
    return useMutation(() => taskDeleteTask());
}