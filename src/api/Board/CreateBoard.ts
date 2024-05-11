import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { BoardCreateBoardRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                              CreateBoard                                   */
/* -------------------------------------------------------------------------- */

type BoardCreateBoardRequestBody = {
  name?: string;
  projectId?: string;
  color?: string;
};

type BoardCreateBoardResponse = ResponseBody<{
  name: string;
  position: number;
  project: string;
  _id: string;
  tasks: [];
}>;

export function BoardCreateBoard() {
  async function boardCreateBoard(
    incomingData: BoardCreateBoardRequestBody
  ): Promise<BoardCreateBoardResponse> {
    const { data } = await AXIOS.post(BoardCreateBoardRoute, incomingData);
    return data;
  }

  return useMutation((data : BoardCreateBoardRequestBody) => boardCreateBoard(data))
}
