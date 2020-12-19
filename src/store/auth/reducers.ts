import { baseInitialState, IAction } from "../base/types";
import { IAuthState, AuthActionsTypesEnum } from "./types";

const initialState: IAuthState = {
  ...baseInitialState,
  isAuthenticated: false,
  user: {
    id: "",
    email: "",
    userName: "",
    roles: [""]
  }
}


export const authReducer = (state: IAuthState = initialState, action: IAction): IAuthState => {
  switch (action.type) {
    case AuthActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case AuthActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case AuthActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case AuthActionsTypesEnum.fetchLoginData:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    
    case AuthActionsTypesEnum.logout:
      return {
        ...state,
        isAuthenticated: false,
        user: {
          id: "",
          email: "",
          userName: "",
          roles: [""]
        }
      }

    default:
      return state
  }
}