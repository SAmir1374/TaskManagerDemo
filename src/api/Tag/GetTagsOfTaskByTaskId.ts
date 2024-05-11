import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { TagGetTagsOfTaskByTaskIdRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                           GetTagOfTaskByTaskId                             */
/* -------------------------------------------------------------------------- */

type tasksType = {
  tagName: string;
  _id: string;
  color: string;
};

type TagGetTagOfTaskByTaskIdResponse = ResponseBody<{
  _id: string;
  name: string;
  description: string;
  tags: tasksType[];
}>;

export function TagGetTagOfTaskByTaskId(id: string) {
  async function tagGetTagOfTaskByTaskId(): Promise<TagGetTagOfTaskByTaskIdResponse> {
    const { data } = await AXIOS.get(`${TagGetTagsOfTaskByTaskIdRoute}:${id}`);
    return data;
  }

  return useQuery(["tagGetTagOfTaskByTaskId", id], tagGetTagOfTaskByTaskId);
}
