import React, { useState } from "react"
import { Pagination, PaginationType } from "../pagination"
import { getUsersThunk } from "../../store/users/actions"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { RolesControl } from "./rolesControl"
import { DeleteUser } from "./deleteUser"
import { IUser, IUserResponse } from "../../store/users/types"

export const UserList: React.FC = () => {
  const pages: IUserResponse = useSelector((state: RootState) => state.user.usersData)
  const users: IUser[] = pages.data

  const pagProps: PaginationType = {
    handler: getUsersThunk,
    totalPages: pages.totalPages,
    currentPage: pages.currentPage,
    hasNext: pages.hasNext,
    hasPrevious: pages.hasPrevious
  }

  const rolePanel = (user: IUser) => {
    return <>
      <div className="dropdown">
        <li className="nav-item active-item">
          <div className="nav-link link">
            <span className="material-icons">settings</span>
          </div>
        </li>

        <div className="dropdown-content">
          <RolesControl {...user} />
        </div>
      </div>
    </>
  }

  return <>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Імя</th>
          <th scope="col">Email</th>
          <th>Налаштування ролей</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) =>
          <tr key={user.id}>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{rolePanel(user)}</td>
            <td><DeleteUser {...user} /></td>
          </tr>
        )}
      </tbody>
    </table>

    <Pagination {...pagProps} />
  </>
}