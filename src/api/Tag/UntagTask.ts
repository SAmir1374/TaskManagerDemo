import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { TagUnTagTaskRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                              UnTagTask                                     */
/* -------------------------------------------------------------------------- */

type TagUnTagTaskRequestBody = {
  name: string;
  taskId: string;
};

type TagUnTagTaskResponse = ResponseBody<{}>;

export function TagUnTagTask() {
  async function tagUnTagTask(isData: TagUnTagTaskRequestBody): Promise<TagUnTagTaskResponse> {
    const { data } = await AXIOS.post(TagUnTagTaskRoute, isData);
    return data;
  }

  return useMutation(( data : TagUnTagTaskRequestBody ) => tagUnTagTask(data));
}
