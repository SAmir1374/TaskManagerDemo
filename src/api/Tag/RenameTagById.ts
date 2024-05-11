import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { TagRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                            RenameTagById                                   */
/* -------------------------------------------------------------------------- */

type TagRenameTagByIdRequestBody = {
  name: string;
  color: string;
};

type TagRenameTagByIdResponse = ResponseBody<{}>;

export function TagGetTagByTagNameOrId(id: string) {
  async function tagGetTagByTagNameOrId(): Promise<TagRenameTagByIdResponse> {
    const { data } = await AXIOS.patch(`${TagRoute}:${id}`);
    return data;
  }

  return useQuery(["tagGetTagByTagNameOrId"], tagGetTagByTagNameOrId);
}
