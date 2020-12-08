import { baseInitialState, IAction } from "../base/types";
import { IInstaSettingsState, InstaSettingsActionsTypesEnum } from "./types";

const initialState: IInstaSettingsState = {
  instaSettingsData: {
    username: "",
    password: "",
    msgReceiverList: []
  },
  ...baseInitialState
}

export const instaSettingsReducer = (state: IInstaSettingsState = initialState, action: IAction): IInstaSettingsState => {
  switch (action.type) {
    case InstaSettingsActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case InstaSettingsActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case InstaSettingsActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case InstaSettingsActionsTypesEnum.fetchInstaSettings:
      return {
        ...state,
        instaSettingsData: action.payload
      }

    default:
      return state
  }
}