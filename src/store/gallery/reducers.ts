import { baseInitialState, IAction } from "../base/types";
import { GalleryActionsTypesEnum, IGalleryState } from "./types";

const initialState: IGalleryState = {
  images: [],
  ...baseInitialState
}

export const galleryReducer = (state: IGalleryState = initialState, action: IAction): IGalleryState => {
  switch (action.type) {
    case GalleryActionsTypesEnum.showLoader:
      return { ...state, showLoader: action.payload }

    case GalleryActionsTypesEnum.showAlert:
      return {
        ...state,
        alert: {
          showAlert: true,
          text: action.payload
        }
      }

    case GalleryActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case GalleryActionsTypesEnum.fetchImages:
      return {
        ...state,
        images: action.payload
      }

    default:
      return state
  }
}