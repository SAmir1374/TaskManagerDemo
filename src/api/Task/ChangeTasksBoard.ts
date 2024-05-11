import AXIOS from "../../utils/axios";
import { useMutation } from "@tanstack/react-query";
import { ResponseBody } from "../Types";



  
type TaskChangeTasksBoardResponseBody = ResponseBody<{
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
  
export function TaskChangeTasksBoard(id:string,boardId:string) {
    async function taskChangeTasksBoard(
    ): Promise<TaskChangeTasksBoardResponseBody> {
      const { data } = await AXIOS.put(`/task/:${id}/board/:${boardId}`);
      return data;
  }
  
    return useMutation(() => taskChangeTasksBoard());
}