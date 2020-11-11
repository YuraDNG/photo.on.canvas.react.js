import { IState } from "../base/types";

export enum RolesActionsTypesEnum {
  showLoader = "ROLES_SHOW_LOADER",
  showAlert = "ROLES_SHOW_ALERT",
  hideAlert = "ROLES_HIDE_ALERT",
  fetchRoles = "FETCH_ROLES",
}

export interface IRole {
  id: string,
  name: string
}

export interface IRolesState extends IState {
  rolesData: IRole[]
}