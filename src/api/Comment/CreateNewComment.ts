import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";

type CommentCreateNewCommentRequestBody = {
    text: string,
    taskId: string
}

export function CommentCreateNewTask() {
    async function commentCreateNewTask(
      incomingData: CommentCreateNewCommentRequestBody
    ) {
      const { data } = await AXIOS.post("/comments/", incomingData);
      return data;
    }
  
    return useMutation((data: CommentCreateNewCommentRequestBody) => commentCreateNewTask(data));
  }