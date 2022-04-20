export interface GetLoginUrlQueryResponse {
  getLoginUrlsForUser: {
    GOOGLE: string;
  };
}

export enum AuthProvider {
  GOOGLE = "GOOGLE",
}

export interface LoginForUserMutationResponse {
  loginForUser: {
    token: string;
    user: User;
  };
}

export interface AuthForUserMutationResponse {
  authForUser: {
    token: string;
    user: User;
  };
}

export interface Avatar {
  url: string | null;
  name: string | null;
}

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface AuthState {
  user: User | null;
}
