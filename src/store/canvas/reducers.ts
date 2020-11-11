import { baseInitialState, IAction } from "../base/types";
import { CanvasActionsTypesEnum, ICanvasState } from "./types";

const initialState: ICanvasState = {
  canvasData: [],
  ...baseInitialState
}

export const canvasReducer = (state: ICanvasState = initialState, action: IAction): ICanvasState => {
  switch (action.type) {
    case CanvasActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case CanvasActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case CanvasActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case CanvasActionsTypesEnum.fetchCanvas:
      return {
        ...state,
        canvasData: action.payload
      }

    default:
      return state
  }
}