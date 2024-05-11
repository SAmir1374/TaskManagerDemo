import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type TaskChangeTaskPositionResponseBody = ResponseBody<null>


export function TaskChangeTaskPosition(id:string,index:string) {
    async function taskChangeTaskPosition(
    ): Promise<TaskChangeTaskPositionResponseBody> {
      const { data } = await AXIOS.put(`/task/:${id}/position/:${index}`);
      return data;
  }
  
    return useMutation(() => taskChangeTaskPosition());
}