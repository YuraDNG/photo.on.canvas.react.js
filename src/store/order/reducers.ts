import { baseInitialState, IAction } from "../base/types";
import { IOrdersState, OrdersActionsTypesEnum } from "./types";

const initialState: IOrdersState = {
  ordersData: {
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

export const ordersReducer = (state: IOrdersState = initialState, action: IAction): IOrdersState => {
  switch (action.type) {
    case OrdersActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case OrdersActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case OrdersActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case OrdersActionsTypesEnum.fetchOrders:
      return {
        ...state,
        ordersData: action.payload
      }

    default:
      return state
  }
}