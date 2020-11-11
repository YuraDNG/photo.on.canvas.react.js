import { baseInitialState, IAction } from "../base/types";
import { IRegisterState, RegisterActionsTypesEnum } from "./types";

const initialState: IRegisterState = {
  ...baseInitialState
}

export const registrationReducer = (state: IRegisterState = initialState, action: IAction): IRegisterState => {
  switch (action.type) {
    case RegisterActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case RegisterActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case RegisterActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    default:
      return state
  }
}