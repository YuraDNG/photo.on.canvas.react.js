import Axios from "axios"
import { Dispatch } from "redux"
import { api } from "../api"
import { EmailSettingsActionsTypesEnum, IEmailSettings } from "./types"

const showLoaderRegister = (data: boolean) => {
  return {
    type: EmailSettingsActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertRegister = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: EmailSettingsActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: EmailSettingsActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

const fetchEmailSettings = (data: IEmailSettings) => {
  return {
    type: EmailSettingsActionsTypesEnum.fetchEmailSettings,
    payload: data
  }
}

export const getEmailConfigThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderRegister(true))

    Axios.get(api.getEmailConfig)
      .then(res => {
        dispatch(fetchEmailSettings(res.data))
        dispatch(showLoaderRegister(false))
      })
      .catch(err => {
        dispatch(showLoaderRegister(false))
        dispatch(showAlertRegister("Помилка сервера!"))
      })
  }
}

export const setEmailConfigThunk = (data: IEmailSettings) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderRegister(true))

    Axios.post(api.SetEmailConfig, data)
      .then(res => {
        dispatch(showLoaderRegister(false))
      })
      .catch(err => {
        dispatch(showLoaderRegister(false))
        dispatch(showAlertRegister("Помилка сервера!"))
      })
  }
}


