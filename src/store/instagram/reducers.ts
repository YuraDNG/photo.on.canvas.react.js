import { baseInitialState, IAction } from "../base/types";
import { IInstaState, InstaActionsTypesEnum } from "./types";

const initialState: IInstaState = {
  instaData: {
    instaStories: []
  },
  ...baseInitialState
}

export const instagramReducer = (state: IInstaState = initialState, action: IAction): IInstaState => {
  switch (action.type) {
    case InstaActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case InstaActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case InstaActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case InstaActionsTypesEnum.fetchInstaStories:
      return {
        ...state,
        instaData: {
          instaStories: action.payload
        }
      }

    default:
      return state
  }
}