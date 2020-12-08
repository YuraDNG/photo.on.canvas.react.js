import { IState } from "../base/types";

export enum InstaActionsTypesEnum {
  showLoader = "INSTAGRAM_SHOW_LOADER",
  showAlert = "INSTAGRAM_SHOW_ALERT",
  hideAlert = "INSTAGRAM_HIDE_ALERT",
  fetchInstaStories = "FETCH_INSTAGRAM_STORIES",
}

export interface IInstaResponse {
  instaStories: IInstaStory[]
}

export interface IInstaStory {
  imgURL: string,
  videoURL: string
}

export interface IInstaState extends IState{
  instaData: IInstaResponse
}