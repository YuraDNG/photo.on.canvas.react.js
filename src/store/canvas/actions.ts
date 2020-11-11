import Axios from "axios"
import { Dispatch } from "redux"
import { api } from "../api"
import { CanvasActionsTypesEnum, ICanvas, ICreateCanvas } from "./types"

const showLoaderCanvas = (data: boolean) => {
  return {
    type: CanvasActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertCanvas = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: CanvasActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: CanvasActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

const fetchCanvas = (data: ICanvas[]) => {
  return {
    type: CanvasActionsTypesEnum.fetchCanvas,
    payload: data
  }
}

export const getCanvasThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderCanvas(true))

    Axios.get(api.getCanvas)
      .then(res => {
        dispatch(fetchCanvas(res.data))
      })
      .catch(err => {
        dispatch(showAlertCanvas("Помилка сервера!"))
      })

    dispatch(showLoaderCanvas(false))
  }
}

export const makeCanvasThunk = (data: ICreateCanvas) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderCanvas(true))

    Axios.post(api.createCanvas, data)
      .then()
      .catch(err => {
        dispatch(showAlertCanvas("Помилка сервера!"))
      })

    dispatch(showLoaderCanvas(false))
  }
}

export const deleteCanvasThunk = (canvasId: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderCanvas(true))

    Axios.post(api.deleteCanvas, canvasId)
      .then()
      .catch(err => {
        dispatch(showAlertCanvas("Помилка сервера!"))
      })

    dispatch(showLoaderCanvas(false))
  }
}




