import { IState } from "../base/types";

export enum InstaSettingsEnum {
  username = "username",
  password = "password",
  msgReceiverList = "msgReceiverList",
}

export enum InstaSettingsActionsTypesEnum {
  showLoader = "INSTAGRAM_SETTINGS_SHOW_LOADER",
  showAlert = "INSTAGRAM_SETTINGS_SHOW_ALERT",
  hideAlert = "INSTAGRAM_SETTINGS_HIDE_ALERT",
  fetchInstaSettings = "FETCH_INSTAGRAM_SETTINGS"
}

export interface IInstaSettings {
  username: string,
  password: string,
  msgReceiverList: string[],
}

export interface IInstaSettingsState extends IState{
  instaSettingsData: IInstaSettings
}

export const instaSettingsTypeName: string = "InstagramSettings"