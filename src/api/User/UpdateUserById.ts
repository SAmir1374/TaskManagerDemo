import { useMutation } from "@tanstack/react-query";
import { ResponseBody } from "../Types";
import AXIOS from "../../utils/axios";
import { UsersBaseRoute } from "../api.routes";

type UserUpdateUserByIdRequestBody = {
  firstname?: string;
  lastname?: string;
  email?: string;
};

type UserUpdateUserByIdResponse = ResponseBody<{
  _id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  profile_url: string;
  phone: string;
  workspaces: string[];
  workspaceMember: [];
  taskAssignees: string[];
  comments: [];
  settings: [];
  projectMember: string[];
  __v: number;
}>;

export function UserUpdateUserById(id: string) {
  async function userUpdateUserById(
    incomingData: UserUpdateUserByIdRequestBody
  ): Promise<UserUpdateUserByIdResponse> {
    const { data } = await AXIOS.put(`${UsersBaseRoute}/${id}`, incomingData);
    return data;
  }

  return useMutation((data: UserUpdateUserByIdRequestBody) =>
    userUpdateUserById(data)
  );
}
