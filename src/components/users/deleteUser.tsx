import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteUserThunk } from "../../store/users/actions"
import { IUser } from "../../store/users/types"
import { DeleteIcon } from "../general/deleteIcon/deleteIcon"

export const DeleteUser = (props: IUser): JSX.Element => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const deleteUser = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(deleteUserThunk(props.id))
  }

  return <>
    <React.Fragment>
      <DeleteIcon onClickHandler={() => setIsOpen(true)}/>

      {isOpen && (
        <div className="custom-modal">
          <form className="custom-modal-body" onSubmit={deleteUser}>
            <div className="form-group">
              <table>
                <thead>
                  <tr>
                    <th>Імя Користувача</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{props.userName}</td>
                    <td>{props.email}</td>
                  </tr>
                </tbody>
              </table>

              <button className="btn btn-dark m-1" type="submit">Видалити користувача</button>
              <button className="btn btn-dark m-1" onClick={() => setIsOpen(false)}>Закрити</button>
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  </>
}