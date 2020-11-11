import { baseInitialState, IAction } from "../base/types";
import { ILoginState, LoginActionsTypesEnum } from "./types";

const initialState: ILoginState = {
  ...baseInitialState
}

export const loginReducer = (state: ILoginState = initialState, action: IAction): ILoginState => {
  switch (action.type) {
    case LoginActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case LoginActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case LoginActionsTypesEnum.hideAlert:
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