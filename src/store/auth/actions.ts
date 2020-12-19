import Axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { api } from "../api";
import { ILogin, AuthActionsTypesEnum, ILoginResponse} from "./types";

const showLoaderAuth = (data: boolean) => {
  return {
    type: AuthActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertAuth = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: AuthActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

const fetchLoginData = (data: ILoginResponse) => {
  return {
    type: AuthActionsTypesEnum.fetchLoginData,
    payload: data.user
  }
}

const logout = () => {
  return {
    type: AuthActionsTypesEnum.logout
  }
}

export const loginThunk = (data: ILogin) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderAuth(true))
    
    let headers: AxiosRequestConfig = { headers: { 
      withCredentials: true, 
      "Content-Type": "application/json-patch+json",
      "accept": "text/plain" 
    }}

    Axios.post(api.login, data, headers)
      .then(res => {
        let data: ILoginResponse = res.data
        localStorage.setItem("token", data.jwt)
        dispatch(fetchLoginData(data))
        dispatch(showLoaderAuth(false))
      })
      .catch(err => {
        dispatch(showAlertAuth("Помилка сервера!"))
        dispatch(showLoaderAuth(false))
      })
  }
}

export const logoutThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderAuth(true))
    dispatch(logout)
    localStorage.removeItem("token")
    dispatch(showLoaderAuth(false))
  }
}


