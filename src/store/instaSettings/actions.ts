import Axios from "axios"
import { Dispatch } from "redux"
import { api } from "../api"
import { updateStoriesThunk } from "../instagram/actions"
import { IInstaSettings, InstaSettingsActionsTypesEnum } from "./types"

const showLoaderRegister = (data: boolean) => {
  return {
    type: InstaSettingsActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertRegister = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: InstaSettingsActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: InstaSettingsActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

const fetchInstaSettings = (data: IInstaSettings) => {
  return {
    type: InstaSettingsActionsTypesEnum.fetchInstaSettings,
    payload: data
  }
}

export const getInstaConfigThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderRegister(true))

    Axios.get(api.getInstaConfig)
      .then(res => {
        dispatch(fetchInstaSettings(res.data))
        dispatch(showLoaderRegister(false))
      })
      .catch(err => {
        dispatch(showLoaderRegister(false))
        dispatch(showAlertRegister("Помилка сервера!"))
      })
  }
}

export const setInstaConfigThunk = (data: FormData) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderRegister(true))

    Axios.post(api.setInstaConfig, data)
      .then(res => {
        dispatch(showLoaderRegister(false))
        dispatch(updateStoriesThunk())
      })
      .catch(err => {
        dispatch(showLoaderRegister(false))
        dispatch(showAlertRegister("Помилка сервера!"))
      })
  }
}


