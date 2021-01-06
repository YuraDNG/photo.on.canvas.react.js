import { IState } from "../base/types";

export enum InstaActionsTypesEnum {
  showLoader = "INSTAGRAM_SHOW_LOADER",
  showAlert = "INSTAGRAM_SHOW_ALERT",
  hideAlert = "INSTAGRAM_HIDE_ALERT",
  fetchStories = "FETCH_STORIES",
  fetchReviews = "FETCH_REVIEWS",
  fetchVisualizations = "FETCH_VISUALIZATIONS"
}

export interface IInstaStory {
  id: string,
  category: string,
  imageUri: string,
  videoUri: string
}

export interface IInstaState extends IState{
  reviews: IInstaStory[],
  visualizations: IInstaStory[],
  stories: IInstaStory[]
}