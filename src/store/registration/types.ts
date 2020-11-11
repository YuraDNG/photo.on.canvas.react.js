import { IState } from "../base/types";

export enum RegisterActionsTypesEnum {
  showLoader = "REGISTER_SHOW_LOADER",
  showAlert = "REGISTER_SHOW_ALERT",
  hideAlert = "REGISTER_HIDE_ALERT",
  registrate = "REGISTRATE",
}

export interface IRegister {
  email: string,
  password: string,
  confirmPassword: string
}

export interface IRegisterState extends IState {

}
