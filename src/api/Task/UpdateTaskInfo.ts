import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type TaskUpdateTaskInfoRequestBody = {
    name: string;
    description: string;
    boardId: string;
  };

  type TaskUpdateTaskInfoResponseBody = ResponseBody<{
    name: string;
    description: string;
    label: [];
    board: string;
    taskTags: [];
    taskAssigns: [];
    comments: [];
    position: number;
    _id: string;
    deadline: string,
  }>;
  
  export function TaskUpdateTaskInfo(id:string) {
    async function taskUpdateTaskInfo(
      incomingData: TaskUpdateTaskInfoRequestBody
    ): Promise<TaskUpdateTaskInfoResponseBody> {
      const { data } = await AXIOS.put(`/task/:${id}`, incomingData);
      return data;
    }
  
    return useMutation((data: TaskUpdateTaskInfoRequestBody) => taskUpdateTaskInfo(data));
  }