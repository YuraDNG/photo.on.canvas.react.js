import { IState } from "../base/types";

export enum AuthActionsTypesEnum {
  showLoader = "AUTH_SHOW_LOADER",
  showAlert = "AUTH_SHOW_ALERT",
  hideAlert = "AUTH_HIDE_ALERT",
  fetchLoginData = "FETCH_LOGIN_DATA",
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
  user: {
    id: string,
    email: string,
    userName: string,
    roles: [
      string
    ]
  }
}

export interface IAuthState extends IState{
  isAuthenticated: boolean,
  user: {
    id: string,
    email: string,
    userName: string,
    roles: [
      string
    ]
  }
}
