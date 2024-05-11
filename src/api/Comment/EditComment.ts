import { useMutation } from "@tanstack/react-query"
import AXIOS from "../../utils/axios"
import { ResponseBody } from "../Types"

type CommentEditCommentRequestBody = {
    text: string
}


type CommentEditCommentResponseBody = ResponseBody<{
    _id: string,
    text: string,
    user: {
        _id: string,
        username: string
    },
    createdAt: string
}>


export function CommentEditComment(id:string) {
    async function commentEditComment(
      incomingData: CommentEditCommentRequestBody
    ): Promise<CommentEditCommentResponseBody> {
      const { data } = await AXIOS.post(`/comments/:${id}`, incomingData);
      return data;
    }
  
    return useMutation((data: CommentEditCommentRequestBody) => commentEditComment(data));
  }

