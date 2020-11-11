import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { IRole } from "../../store/roles/types"
import { editUserRolesThunk } from "../../store/users/actions"
import { IUser } from "../../store/users/types"

export const RolesControl = (props: IUser): JSX.Element => {
  const dispatch = useDispatch()
  const allRoles: IRole[] = useSelector((state: RootState) => state.roles.rolesData)
  const [chekedItems, setChekedItems] = useState<Set<string>>(new Set<string>(props.roles))

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!chekedItems.has(event.target.name)) {
      setChekedItems(new Set<string>(chekedItems.add(event.target.name)))
    } else {
      chekedItems.delete(event.target.name)
      setChekedItems(new Set<string>(chekedItems))
    }
  }

  const changeUserRoles = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault()
    dispatch(editUserRolesThunk({ userId: props.id, roles: Array.from(chekedItems) }))
  }

  return <>
    {allRoles.map((role) =>
      <div className="form-check m-3" key={role.id}>
        <label>{role.name}</label>
        <input
          className="m-3"
          type="checkbox"
          name={role.name}
          checked={chekedItems.has(role.name)}
          onChange={e => checkboxHandler(e)}
        />
      </div>
    )}

    <span className="material-icons" onClick={e => changeUserRoles(e)}>check</span>
  </>
}