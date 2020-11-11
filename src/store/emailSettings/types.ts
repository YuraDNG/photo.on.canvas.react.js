import { IState } from "../base/types";

export enum EmailSettingsEnum {
  serviceIsOn = "serviceIsOn",
  from = "from",
  smtpServer = "smtpServer",
  port = "port",
  userName = "userName",
  password = "password"
}

export enum EmailSettingsActionsTypesEnum {
  showLoader = "EMAIL_SETTINGS_SHOW_LOADER",
  showAlert = "EMAIL_SETTINGS_SHOW_ALERT",
  hideAlert = "EMAIL_SETTINGS_HIDE_ALERT",
  fetchEmailSettings = "FETCH_EMAIL_SETTINGS"
}

export interface IEmailSettings {
  serviceIsOn: boolean,
  from: string,
  smtpServer: string,
  port: number,
  userName: string,
  password: string
}

export interface IEmailSettingsState extends IState{
  emailSettingsData: IEmailSettings
}

export const emailSettingsTypeName: string = "EmailSettings"