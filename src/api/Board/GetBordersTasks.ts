import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { BoardRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                           GetBoardersTasks                                 */
/* -------------------------------------------------------------------------- */

type commentsArray = {
  _id: string; // comment _id
  text: string;
  user: userType;
  createdAt: string;
};

type userType = {
  _id: string; // user _id
  username: string;
  firstname: string;
  email: string;
};

type BoardGetBoardersTasksResponse = ResponseBody<
  {
    _id: string;
    name: string;
    description: string;
    label: [];
    board: string; //board _id
    taskTags: [];
    taskAssigns: userType[];
    comments: commentsArray[];
    position: number;
  }[]
>;

export function GetBoardersTasks(BorderId: string) {
  async function getBoardersTasks(): Promise<BoardGetBoardersTasksResponse> {
    const { data } = await AXIOS.get(`${BoardRoute}/:${BorderId}/tasks`);
    return data;
  }

  return useQuery(["GetAllProjectBoards", BorderId], getBoardersTasks);
}
