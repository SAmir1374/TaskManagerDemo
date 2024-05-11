import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { TagRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                             DeleteTagId                                    */
/* -------------------------------------------------------------------------- */

type BoardDeleteBoardByIdResponse = ResponseBody<{
  message: string;
}>;

export function DeleteTagById(TagId: string) {
  async function deleteTagById(): Promise<BoardDeleteBoardByIdResponse> {
    const { data } = await AXIOS.delete(`${TagRoute}:${TagId}`);
    return data;
  }

  return useQuery(["DeleteTagById"], deleteTagById);
}
