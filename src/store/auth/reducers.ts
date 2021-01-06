import { baseInitialState, IAction } from "../base/types";
import { IAuthState, AuthActionsTypesEnum } from "./types";

const initialState: IAuthState = {
  ...baseInitialState,
  isAuthenticated: false,
  isAdmin: false,
}


export const authReducer = (state: IAuthState = initialState, action: IAction): IAuthState => {
  switch (action.type) {
    case AuthActionsTypesEnum.showLoader:
      return { ...state, showLoader: action.payload }

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

    case AuthActionsTypesEnum.login:
      return {
        ...state,
        isAuthenticated: true
      }

    case AuthActionsTypesEnum.logout:
      return {
        ...state,
        isAuthenticated: false,
        isAdmin: false
      }

    case AuthActionsTypesEnum.isAdmin:
      return {
        ...state,
        isAdmin: action.payload
      }

    case AuthActionsTypesEnum.isAuthenticated:
      return {
        ...state,
        isAuthenticated: action.payload
      }

    default:
      return state
  }
}