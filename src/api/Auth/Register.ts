import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { AuthRegisterRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                                  Register                                  */
/* -------------------------------------------------------------------------- */

type AuthRegisterRequestBody = {
  username: string;
  email: string;
  password: string;
  firstname?: string;
  lastname?: string;
  profile_url?: string;
  phone?: string;
};

type AuthRegisterResponse = ResponseBody<{
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  profile_url: string;
  phone: string;
  workspaces: [];
  workspaceMember: [];
  taskAssignees: [];
  comments: [];
  settings: [];
  projectMember: [];
  _id: string;
}>;

export function AuthRegister() {
  async function authRegister(
    incomingData: AuthRegisterRequestBody
  ): Promise<AuthRegisterResponse> {
    const { data } = await AXIOS.post(AuthRegisterRoute, incomingData);
    return data;
  }

  return useMutation((data: AuthRegisterRequestBody) => authRegister(data));
}
