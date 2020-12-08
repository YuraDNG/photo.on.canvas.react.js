import React, { useState } from "react"
import { Pagination, PaginationType } from "../general/pagination"
import { deleteUserThunk, getUsersThunk, showAlertUsers } from "../../store/users/actions"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { RolesControl } from "./rolesControl"
import { IUser, IUserResponse } from "../../store/users/types"
import { DeleteIcon } from "../general/deleteIcon/deleteIcon"

export const UserList: React.FC = () => {
  const dispatch = useDispatch()
  const pages: IUserResponse = useSelector((state: RootState) => state.user.usersData)
  const users: IUser[] = pages.data

  const pagProps: PaginationType = {
    handler: getUsersThunk,
    totalPages: pages.totalPages,
    currentPage: pages.currentPage,
    hasNext: pages.hasNext,
    hasPrevious: pages.hasPrevious
  }

  const deleteUser = (userId: string) => {
    let result = window.confirm("Підтвердіть видалення")
    if (result) {
      dispatch(deleteUserThunk(userId))
    } else {
      dispatch(showAlertUsers("Видалення Відмінено!"))
    }
  }


  const rolePanel = (user: IUser) => {
    return <>
      <div className="dropdown">
        <li className="nav-item active-item">
          <div className="link">
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
          <th scope="col">Роль</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) =>
          <tr key={user.id}>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{rolePanel(user)}</td>
            <td><DeleteIcon onClickHandler={() => deleteUser(user.id)}/></td>
          </tr>
        )}
      </tbody>
    </table>

    <Pagination {...pagProps} />
  </>
}