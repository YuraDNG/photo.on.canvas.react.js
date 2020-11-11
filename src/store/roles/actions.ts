import Axios from "axios";
import { Dispatch } from "redux";
import { api } from "../api";
import { IRole, RolesActionsTypesEnum } from "./types";

const showLoaderRoles = (data: boolean) => {
  return {
    type: RolesActionsTypesEnum.showLoader,
    payload: data
  }
}

const showAlertRoles = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: RolesActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: RolesActionsTypesEnum.hideAlert })
    }, 5000)
  }
}


const fetchRoles = (data: IRole[]) => {
  return {
    type: RolesActionsTypesEnum.fetchRoles,
    payload: data
  }
}

export const createRoleThunk = (roleName: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderRoles(true))

    Axios.post(api.createRole, roleName)
      .then()
      .catch(err => {
        dispatch(showAlertRoles("Помилка сервера!"))
      })

    dispatch(showLoaderRoles(false))
  }
}

export const getRolesThunk = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderRoles(true))

    Axios.get(api.getRoles)
      .then(res => {
        dispatch(fetchRoles(res.data))
        dispatch(showLoaderRoles(false))
      })
      .catch(err => {
        console.log(err)
        dispatch(showAlertRoles("Помилка сервера!"))
        dispatch(showLoaderRoles(false))
      })
  }
}

export const deleteRoleThunk = (roleId: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderRoles(true))

    Axios.post(api.deleteRole, roleId)
      .then()
      .catch(err => {
        dispatch(showAlertRoles("Помилка сервера!"))
      })

    dispatch(showLoaderRoles(false))
  }
}


