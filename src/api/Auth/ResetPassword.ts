import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { AuthResetPasswordRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                               Reset Password                               */
/* -------------------------------------------------------------------------- */
type AuthResetPasswordRequestBody = {
  token: string;
  password: string;
};

type AuthResetPasswordResponse = ResponseBody<null>;

export function AuthResetPassword() {
  async function authResetPassword(
    incomingData: AuthResetPasswordRequestBody
  ): Promise<AuthResetPasswordResponse> {
    const { data } = await AXIOS.post(AuthResetPasswordRoute, incomingData);
    return data;
  }

  return useMutation((data: AuthResetPasswordRequestBody) =>
    authResetPassword(data)
  );
}
