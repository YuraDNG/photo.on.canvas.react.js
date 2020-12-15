import Axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { api } from "../api";
import { ILogin, LoginActionsTypesEnum} from "./types";

const showLoaderLogin = (data: boolean) => {
  return {
    type: LoginActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertLogin = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: LoginActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: LoginActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

export const loginThunk = (data: ILogin) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderLogin(true))
    
    let headers: AxiosRequestConfig = { headers: { 
      withCredentials: true, 
      "Content-Type": "application/json-patch+json",
      "accept": "text/plain" 
    }}

    Axios.post(api.login, data, headers)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        dispatch(showAlertLogin("Помилка сервера!"))
      })

    dispatch(showLoaderLogin(false))
  }
}


