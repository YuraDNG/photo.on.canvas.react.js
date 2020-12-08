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

const fetchInstaStories = (data: IInstaStory[]) => {
  return {
    type: InstaActionsTypesEnum.fetchInstaStories,
    payload: data
  }
}

export const getInstaStoriesThunk = (storiesName: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderInsta(true))

    Axios.get(api.getInstaStories, { params: { storyName: storiesName } })
      .then(res => {
        dispatch(fetchInstaStories(res.data))
        dispatch(showLoaderInsta(false))

      })
      .catch(error => {
        dispatch(showLoaderInsta(false))
        dispatch(showAlertInsta("Помилка сервера!"))
        console.log(error)
      })
  }
}




