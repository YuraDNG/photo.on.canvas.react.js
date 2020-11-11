import { baseInitialState, IAction } from "../base/types";
import { EmailSettingsActionsTypesEnum, IEmailSettingsState } from "./types";

const initialState: IEmailSettingsState = {
  emailSettingsData: {
    serviceIsOn: false,
    from: " ",
    smtpServer: " ",
    port: 0,
    userName: " ",
    password: " "
  },
  ...baseInitialState
}

export const emailSettingsReducer = (state: IEmailSettingsState = initialState, action: IAction): IEmailSettingsState => {
  switch (action.type) {
    case EmailSettingsActionsTypesEnum.showLoader:
      return {...state, showLoader: action.payload}
    
    case EmailSettingsActionsTypesEnum.showAlert:
      return {
        ...state, 
        alert: {
          showAlert: true,
          text: action.payload
        }
      }  
    
    case EmailSettingsActionsTypesEnum.hideAlert:
      return {
        ...state,
        alert: {
          showAlert: false,
          text: ""
        }
      }

    case EmailSettingsActionsTypesEnum.fetchEmailSettings:
      return {
        ...state,
        emailSettingsData: action.payload
      }

    default:
      return state
  }
}