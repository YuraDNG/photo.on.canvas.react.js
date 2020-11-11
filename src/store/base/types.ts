export interface IAlert {
  showAlert: boolean,
  text: string
}

export interface IState {
  showLoader: boolean,
  alert: IAlert,
}

export interface IAction {
  type: string
  payload?: any
}

export const baseInitialState: IState = {
  showLoader: false,
  alert: {
    showAlert: false,
    text: ""
  }
}

export type PageListQueryType = {
  pageNumber?: number,
  pageSize?: number
 }