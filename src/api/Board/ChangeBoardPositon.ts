import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import {  BoardRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                           ChangeBoardPosition                              */
/* -------------------------------------------------------------------------- */

type BoardChangeBoardPositionResponse = ResponseBody<{
  _id: string;
  name: string;
  position: number;
  project: string;
  tasks: [];
}>;

export function BoardChangeBoardPosition( id : string ,  position : number , index : number) {
  async function boardChangeBoardPosition(): Promise<BoardChangeBoardPositionResponse> {
    const { data } = await AXIOS.put(`${BoardRoute}/:${id}/${position}/${index}`);
    return data;
  }

  return useQuery(["boardChangeBoardPosition"], boardChangeBoardPosition);
}
