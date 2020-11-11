import Axios from "axios";
import { Dispatch } from "redux";
import { api } from "../api";
import { IRegister, RegisterActionsTypesEnum} from "./types";

const showLoaderRegister = (data: boolean) => {
  return {
    type: RegisterActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertRegister = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: RegisterActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: RegisterActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

export const registerThunk = (data: IRegister) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderRegister(true))

    Axios.post(api.registration, data)
      .then()
      .catch(err => {
        dispatch(showAlertRegister("Помилка сервера!"))
      })

    dispatch(showLoaderRegister(false))
  }
}


