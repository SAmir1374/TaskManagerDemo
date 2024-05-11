import { useMutation } from "@tanstack/react-query";
import AXIOS from "../../utils/axios";
import { ResponseBody } from "../Types";
import { AuthRefreshTokenRoute } from "../api.routes";

/* -------------------------------------------------------------------------- */
/*                               Refresh Token                                */
/* -------------------------------------------------------------------------- */
type AuthRefreshTokenRequestBody = {
  refreshToken: string;
};

type AuthRefreshTokenResponse = ResponseBody<{
  accessToken: string;
}>;

export function AuthRefreshToken() {
  async function authRefreshToken(
    incomingData: AuthRefreshTokenRequestBody
  ): Promise<AuthRefreshTokenResponse> {
    const { data } = await AXIOS.post(AuthRefreshTokenRoute, incomingData);
    return data;
  }

  return useMutation((data: AuthRefreshTokenRequestBody) =>
    authRefreshToken(data)
  );
}
