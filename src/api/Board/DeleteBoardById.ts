import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { BoardRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                             DeleteBoardById                                */
/* -------------------------------------------------------------------------- */

type taskArray = {
  task: string;
  position: number;
  _id : string;
};

type BoardDeleteBoardByIdResponse = ResponseBody<{
  _id: string;
  name: string;
  position: number;
  project: string;
  tasks: taskArray[];
}>;


export function DeleteBoardById(BoardId : string){
    async function deleteBoardById() : Promise<BoardDeleteBoardByIdResponse> {
        const { data } = await AXIOS.delete(`${BoardRoute}/${BoardId}`)
        return data
    }

    return useQuery(['DeleteBoardById'] , deleteBoardById)
}