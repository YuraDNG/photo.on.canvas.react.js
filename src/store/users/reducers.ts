import { baseInitialState, IAction } from "../base/types";
import { IUserState, UserActionsTypesEnum} from "./types";

const initialState: IUserState = {
  usersData: {
    currentPage: 0,
    elementsCount: 0,
    pageSize: 0,
    totalPages: 0,
    hasNext: false,
    hasPrevious: false,
    data: []
  },
  ...baseInitialState
}

export const userReducer = (state: IUserState = initialState, action: IAction): IUserState => {
  switch (action.type) {
    case UserActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case UserActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case UserActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case UserActionsTypesEnum.fetchUsers:
      return {
        ...state,
        usersData: action.payload
      }
      

    default:
      return state
  }
}