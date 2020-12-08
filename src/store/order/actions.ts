import Axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { api } from "../api";
import { PageListQueryType } from "../base/types";
import { IOrderResponse, OrdersActionsTypesEnum } from "./types";

const showLoaderOrders = (data: boolean) => {
  return {
    type: OrdersActionsTypesEnum.showLoader,
    payload: data
  }
}

export const showAlertOrders = (data: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: OrdersActionsTypesEnum.showAlert,
      payload: data
    })

    setTimeout(() => {
      dispatch({ type: OrdersActionsTypesEnum.hideAlert })
    }, 5000)
  }
}

const fetchOrders = (data: IOrderResponse) => {
  return {
    type: OrdersActionsTypesEnum.fetchOrders,
    payload: data
  }
}

export const getOrdersThunk = (data: PageListQueryType) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderOrders(true))

    Axios.get(api.getOrders, { params: { pageNumber: data.pageNumber, pageSize: data.pageSize } })
      .then(res => {
        dispatch(fetchOrders(res.data))
        dispatch(showLoaderOrders(false))

      })
      .catch(error => {
        dispatch(showLoaderOrders(false))
        dispatch(showAlertOrders("Помилка сервера!"))
        console.log(error)
      })
  }
}

export const makeOrderThunk = (data: FormData) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderOrders(true))

    let headers: AxiosRequestConfig = { headers: { 'Content-Type': 'multipart/form-data' } }
    Axios.post(api.makeOrder, data, headers)
      .then(res => {
        dispatch(showLoaderOrders(false))
      })
      .catch(err => {
        dispatch(showLoaderOrders(false))
        dispatch(showAlertOrders("Помилка сервера!"))
        console.log("make order fail", err)
      })
  }
}

export const deleteOrderThunk = (orderId: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(showLoaderOrders(true))

    Axios.delete(api.deleteOrder, { params: { orderId: orderId } })
      .then(res => {
        dispatch(showLoaderOrders(false))
      })
      .catch(err => {
        dispatch(showLoaderOrders(false))
        dispatch(showAlertOrders("Помилка сервера!"))
      })
  }
}




