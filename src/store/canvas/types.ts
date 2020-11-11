import { IState } from "../base/types";

export enum CanvasActionsTypesEnum {
  showLoader = "CANVAS_SHOW_LOADER",
  showAlert = "CANVAS_SHOW_ALERT",
  hideAlert = "CANVAS_HIDE_ALERT",
  fetchCanvas = "FETCH_CANVAS",
}

export interface ICanvas {
  id: string,
  name: string,
  price: string,
  size: string,
}

export interface ICreateCanvas {
  price: string,
  size: string,
}

export interface ICanvasState extends IState{
  canvasData: ICanvas[]
}