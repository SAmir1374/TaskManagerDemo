import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";

type CommentDeleteCommentByIdResponseBody = ResponseBody<null>


export function CommentDeleteCommentById(id:string) {
    async function commentDeleteCommentById(
    ): Promise<CommentDeleteCommentByIdResponseBody> {
      const { data } = await AXIOS.delete(`/comments/:${id}`);
      return data;
  }
  
    return useMutation(() => commentDeleteCommentById());
}