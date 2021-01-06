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

const fetchLoginData = () => {
  return {
    type: AuthActionsTypesEnum.login,
  }
}

const isAdmin = (data: boolean) => {
  return {
    type: AuthActionsTypesEnum.isAdmin,
    payload: data
  }
}

const isAuthenticated = (data: boolean) => {
  return {
    type: AuthActionsTypesEnum.isAuthenticated,
    payload: data
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
        localStorage.setItem("poc-token",res.data)
        dispatch(fetchLoginData())
        dispatch(isAdminThunk())
        dispatch(showLoaderAuth(false))
      })
      .catch(err => {
        dispatch(showAlertAuth("Помилка сервера!"))
        dispatch(showLoaderAuth(false))
      })
  }
}

export const getUserDataThunk = () => {
  return (dispatch: Dispatch<any>) => {
    let headers: AxiosRequestConfig = { headers: { 
      "Authorization": `Bearer ${localStorage.getItem("poc-token")}`
    }}

    Axios.get(api.getUserData, headers)
      .then(res => {
      })
      .catch(err => {
      })
  }
}

export const isAdminThunk = () => {
  return (dispatch: Dispatch<any>) => {
    let headers: AxiosRequestConfig = { headers: { 
      "Authorization": `Bearer ${localStorage.getItem("poc-token")}`
    }}

    Axios.get(api.isAdmin, headers)
      .then(res => {
        dispatch(isAdmin(res.data))
      })
      .catch(err => {
      })
  }
}

export const isAuthenticatedThunk = () => {
  return (dispatch: Dispatch<any>) => {
    let headers: AxiosRequestConfig = { headers: { 
      "Authorization": `Bearer ${localStorage.getItem("poc-token")}`
    }}

    Axios.get(api.isAuthenticated, headers)
      .then(res => {
        dispatch(isAuthenticated(res.data))
      })
      .catch(err => {
      })
  }
}

export const logoutThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderAuth(true))
    dispatch(logout())
    localStorage.removeItem("poc-token")
    dispatch(showLoaderAuth(false))
  }
}


