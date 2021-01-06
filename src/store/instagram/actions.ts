import Axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { api } from "../api";
import { IInstaStory, InstaActionsTypesEnum } from "./types"

const showLoaderInsta = (data: boolean) => {
  return {
    type: InstaActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertInsta = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: InstaActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: InstaActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

const fetchStories = (data: IInstaStory[]) => {
  return {
    type: InstaActionsTypesEnum.fetchStories,
    payload: data
  }
}

export const getStoriesThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderInsta(true))

    Axios.post(api.getInstaStories)
      .then(res => {
        dispatch(fetchStories(res.data))
        dispatch(showLoaderInsta(false))
      })
      .catch(error => {
        dispatch(showLoaderInsta(false))
        dispatch(showAlertInsta("Помилка сервера!"))
        console.log(error)
      })
  }
}

export const updateStoriesThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderInsta(true))

    Axios.get(api.updateInsatStories)
      .then(res => {
        dispatch(showLoaderInsta(false))
      })
      .catch(error => {
        dispatch(showLoaderInsta(false))
        dispatch(showAlertInsta("Помилка сервера!"))
      })
  }
}




