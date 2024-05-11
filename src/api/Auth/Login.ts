import { useMutation } from "@tanstack/react-query";
import { ResponseBody } from "../Types";
import AXIOS from "../../utils/axios";
import { AuthLoginRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                                    Login                                   */
/* -------------------------------------------------------------------------- */

type AuthLoginRequestBody = {
  emailOrUsername: string;
  password: string;
};
type AuthLoginResponse = ResponseBody<{
  accessToken: string;
  refreshToken: string;
  toBeSendUserData: {
    _id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    profile_url: string;
    phone: string;
    settings: [];
  };
}>;

export function AuthLogin() {
  async function authRegister(
    incomingData: AuthLoginRequestBody
  ): Promise<AuthLoginResponse> {
    const { data } = await AXIOS.post(AuthLoginRoute, incomingData);
    return data;
  }

  return useMutation((data: AuthLoginRequestBody) => authRegister(data));
}
