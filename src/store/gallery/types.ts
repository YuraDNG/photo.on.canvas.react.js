import { IState } from "../base/types";

export enum GalleryActionsTypesEnum {
  showLoader = "GALLERY_SHOW_LOADER",
  showAlert = "GALLERY_SHOW_ALERT",
  hideAlert = "GALLERY_HIDE_ALERT",
  fetchImages = "GALLERY_FETCH_IMAGES",
}

export interface IImages {
  id: string,
  imageName: string,
  contentType: string,
  image: string
}

export interface IGalleryState extends IState{
  images: IImages[]
}
