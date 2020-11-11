import { IState } from "../base/types";

export enum UserEnum {
  id = "id",
  name = "name",
  email = "email",
  role = "role"
}
export enum UserActionsTypesEnum {
  showLoader = "USER_SHOW_LOADER",
  showAlert = "USER_SHOW_ALERT",
  hideAlert = "USER_HIDE_ALERT",
  fetchUsers = "FETCH_USERS",
}

export interface IUser {
  id: string,
  userName: string,
  email: string,
  roles: string[],
}

export interface IUserResponse {
  elementsCount: number,
  pageSize: number,
  currentPage: number,
  totalPages: number,
  hasNext: boolean,
  hasPrevious: boolean,
  data: IUser[]
}

export interface IUserState extends IState {
  usersData: IUserResponse
}