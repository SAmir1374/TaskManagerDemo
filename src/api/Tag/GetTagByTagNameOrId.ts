import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { TagRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                           GetTagByTagNameOrId                              */
/* -------------------------------------------------------------------------- */

type tasksType = {
  _id: string;
  name: string;
  description: string;
};

type TagGetTagByTagNameOrIdResponse = ResponseBody<{
  _id: string;
  name: string;
  color: string;
  tasks: tasksType[];
}>;

export function TagGetTagByTagNameOrId(id?: string, name?: string) {
  async function tagGetTagByTagNameOrId(): Promise<TagGetTagByTagNameOrIdResponse> {
    const { data } = await AXIOS.get(`${TagRoute}:${id || name}`);
    return data;
  }

  return useQuery(
    ["tagGetTagByTagNameOrId", id || name],
    tagGetTagByTagNameOrId
  );
}
