import Client from "infra/client";
import {
  AuthForUserMutationResponse,
  AuthProvider,
  GetLoginUrlQueryResponse,
  LoginForUserMutationResponse,
} from "../auth";
import authenticateUserMutation from "../infra/AuthenticateUserMutation";
import getLoginUrlQuery from "../infra/GetLoginUrlQuery";
import loginUserMutation from "../infra/LoginUserMutation";

class AuthService {
  client = Client;
  tokenKey = "token";
  loginUrl = "login";

  public async getLoginUrl() {
    const {
      data: {
        getLoginUrlsForUser: { GOOGLE },
      },
    } = await this.client.query<GetLoginUrlQueryResponse>({
      query: getLoginUrlQuery,
    });

    return GOOGLE;
  }

  private async storeJWT(token: string) {
    window.localStorage.setItem(this.tokenKey, token);

    return token;
  }

  private async getJWT() {
    return window.localStorage.getItem(this.tokenKey);
  }

  async authenticate() {
    const token = await this.getJWT();

    if (!token) {
      return null;
    }

    const { data } = await this.client.mutate<AuthForUserMutationResponse>({
      mutation: authenticateUserMutation,
      variables: {
        token,
      },
    });

    if (!data) return null;

    await this.storeJWT(data.authForUser.token);

    return data.authForUser.user;
  }

  async login(code: string) {
    const { data } = await this.client.mutate<LoginForUserMutationResponse>({
      mutation: loginUserMutation,
      variables: {
        code: code,
        service: AuthProvider.GOOGLE,
      },
    });

    if (!data) {
      throw new Error("Login failed");
    }

    await this.storeJWT(data.loginForUser.token);

    return data.loginForUser.user;
  }
}

export default AuthService;
