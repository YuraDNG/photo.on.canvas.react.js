import { IState } from "../base/types";

export enum AuthActionsTypesEnum {
  showLoader = "AUTH_SHOW_LOADER",
  showAlert = "AUTH_SHOW_ALERT",
  hideAlert = "AUTH_HIDE_ALERT",
  login = "LOGIN",
  isAdmin = "IS_ADMIN",
  isAuthenticated = "IS_AUTHENTICATED",
  logout = "LOGOUT"
}

export interface ILogin {
  email: string,
  password: string
}

export interface ILoginResponse {
  signInResult: {
    succeeded: boolean,
    isLockedOut: boolean,
    isNotAllowed: boolean,
    requiresTwoFactor: boolean
  },
  jwt: string,
}

export interface IAuthState extends IState{
  isAuthenticated: boolean,
  isAdmin: boolean,
}
