import Axios from "axios";
import { Dispatch } from "redux";
import { api } from "../api";
import { PageListQueryType } from "../base/types";
import { IUserResponse, UserActionsTypesEnum } from "./types";

const showLoaderUsers = (data: boolean) => {
  return {
    type: UserActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertUsers = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UserActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: UserActionsTypesEnum.hideAlert })
    }, 5000)
  }
}


const fetchUsers = (data: IUserResponse) => {
  return {
    type: UserActionsTypesEnum.fetchUsers,
    payload: data
  }
}

export const getUsersThunk = (data: PageListQueryType) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderUsers(true))

    Axios.get(api.getUsers, { params: { pageNumber: data.pageNumber, pageSize: data.pageSize } })
      .then(res => {
        dispatch(fetchUsers(res.data))
        dispatch(showLoaderUsers(false))
      })
      .catch(err => {
        dispatch(showAlertUsers("Помилка сервера!"))
        dispatch(showLoaderUsers(false))
      })
  }
}

export const deleteUserThunk = (userId: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderUsers(true))

    Axios.post(api.deleteUser, userId)
      .then(res => {
        dispatch(showLoaderUsers(false))
      })
      .catch(err => {
        dispatch(showLoaderUsers(false))
        dispatch(showAlertUsers("Помилка сервера!"))
      })
  }
}

type editRolesRequestType = {
  userId: string,
  roles: string[]
}

export const editUserRolesThunk = (data: editRolesRequestType) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderUsers(true))

    Axios.post(api.editUserRoles, data)
      .then(res => {
        dispatch(showLoaderUsers(false))
      })
      .catch(err => {
        dispatch(showLoaderUsers(false))
        dispatch(showAlertUsers("Помилка сервера!"))
      })
  }
}


