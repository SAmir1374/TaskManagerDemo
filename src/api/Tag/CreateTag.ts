import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { TagCreateTagRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                              CreatTag                                      */
/* -------------------------------------------------------------------------- */

type tagType = {
  _id: string;
  name: string;
  color: string;
};

type taskType = {
  _id: string;
  name: string;
  description: string;
};

type TagCreateTagRequestBody = {
  name: string;
  taskId: string;
  color: string;
};

type TagCreatTagResponse = ResponseBody<{
  tag: tagType;
  tasks: taskType[];
}>;

export function TagCreatTag() {
  async function tagCreatTag(isData : TagCreateTagRequestBody): Promise<TagCreatTagResponse> {
    const { data } = await AXIOS.post(TagCreateTagRoute , isData);
    return data;
  }

  return useMutation((data : TagCreateTagRequestBody) => tagCreatTag(data));
}
