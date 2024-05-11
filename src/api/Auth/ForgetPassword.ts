import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { AuthForgetPasswordRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                              Forget Password                               */
/* -------------------------------------------------------------------------- */
type AuthForgetPasswordRequestBody = {
  email: string;
};

type AuthForgetPasswordResponse = ResponseBody<null>;

export function AuthForgetPassword() {
  async function authForgetPassword(
    incomingData: AuthForgetPasswordRequestBody
  ): Promise<AuthForgetPasswordResponse> {
    const { data } = await AXIOS.post(AuthForgetPasswordRoute, incomingData);
    return data;
  }

  return useMutation((data: AuthForgetPasswordRequestBody) =>
    authForgetPassword(data)
  );
}
