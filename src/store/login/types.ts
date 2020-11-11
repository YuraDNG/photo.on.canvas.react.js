import { IState } from "../base/types";

export enum LoginActionsTypesEnum {
  showLoader = "LOGIN_SHOW_LOADER",
  showAlert = "LOGIN_SHOW_ALERT",
  hideAlert = "LOGIN_HIDE_ALERT",
  login = "LOGIN",
}

export interface ILogin {
  email: string,
  password: string
}

export interface ILoginState extends IState{

}
