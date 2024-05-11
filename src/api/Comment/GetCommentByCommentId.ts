import { useQuery } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type CommentGetCommentByCommentIdResponseBody = ResponseBody<{
  _id: string;
  text: string;
  user: {
    _id: string;
    username: string;
  };
  task: string;
  createdAt: string;
}>;

export function CommentGetCommentByCommentId(id: string) {
  async function commentGetCommentByCommentId(): Promise<CommentGetCommentByCommentIdResponseBody> {
    const { data } = await AXIOS.get(`/comments/:${id}`);
    return data;
  }
  return useQuery(["GetCommentByCommentId", id], commentGetCommentByCommentId);
}
