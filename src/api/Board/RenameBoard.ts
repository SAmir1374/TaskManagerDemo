import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { BoardRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                             RenameBoard                                    */
/* -------------------------------------------------------------------------- */

type BoardRenameRequestBody = {
    name : string
}

type BoardRenameBoardResponse = ResponseBody<{
  _id: string;
  name: string;
  position: number;
  project: string;
  tasks: [];
}>;

export function BoardRenameBoard( id : string) {
  async function boardRenameBoard(): Promise<BoardRenameBoardResponse> {
    const { data } = await AXIOS.put(`${BoardRoute}/:${id}`);
    return data;
  }

  return useQuery(["boardChangeBoardPosition"], boardRenameBoard);
}
