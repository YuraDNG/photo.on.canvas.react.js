import { baseInitialState, IAction } from "../base/types";
import { IRolesState, RolesActionsTypesEnum } from "./types";

const initialState: IRolesState = {
  rolesData: [],
  ...baseInitialState
}

export const rolesReducer = (state: IRolesState = initialState, action: IAction): IRolesState => {
  switch (action.type) {
    case RolesActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case RolesActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case RolesActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case RolesActionsTypesEnum.fetchRoles:
      return {
        ...state,
        rolesData: action.payload
      }

    default:
      return state
  }
}