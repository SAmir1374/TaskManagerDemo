import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { BoardRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                           GetAllProjectBoards                              */
/* -------------------------------------------------------------------------- */

type BoardGetAllProjectBoardsResponse = ResponseBody<
  {
    _id: string;
    name: string;
    position: number;
    project: string;
    tasks: [
      {
        _id: string;
        name: string;
        description: string;
        label: [];
        board: string;
        taskTags: [];
        taskAssigns: string[];
        comments: string[];
        position: number;
      }
    ];
  }[]
>;

export function GetAllProjectBoards(ProjectId: string) {
  async function getAllProjectBoards(): Promise<BoardGetAllProjectBoardsResponse> {
    const { data } = await AXIOS.get(`${BoardRoute}/${ProjectId}`);
    return data;
  }

  return useQuery(["GetAllProjectBoards"], getAllProjectBoards, {
    enabled: false,
  });
}
