import { IState } from "../base/types";
import { ICanvas } from "../canvas/types";

export enum OrdersActionsTypesEnum {
  showLoader = "ORDER_SHOW_LOADER",
  showAlert = "ORDER_SHOW_ALERT",
  hideAlert = "ORDER_HIDE_ALERT",
  fetchOrders = "FETCH_ORDERS",
}

export interface IOrderResponse {
  elementsCount: number,
  pageSize: number,
  currentPage: number,
  totalPages: number,
  hasNext: boolean,
  hasPrevious: boolean,
  data: IOrder[]
}

export interface IOrder {
  id: string,
  customerName: string,
  phoneNumber: string,
  address: string,
  canvas: ICanvas,
  image: string,
}

export interface IMakeOrder {
  customerName: string,
  phoneNumber: string,
  address: string,
  canvasId: string,
  image: File,
  info: string,
}

export enum makeOrderEnum {
  customerName = "customerName",
  phoneNumber = "phoneNumber",
  address = "address",
  canvasId = "canvasId",
  image = "image",
  info = "info",
} 

export interface IOrdersState extends IState{
  ordersData: IOrderResponse
}