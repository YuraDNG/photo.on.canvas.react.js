import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { Spinner } from "../general/spinner"
import { Alert } from "../general/alert"
import { UserList } from "./userList"
import { getUsersThunk } from "../../store/users/actions"
import { getRolesThunk } from "../../store/roles/actions"

export const Users: React.FC = () => {
  const showLoader = useSelector((state: RootState) => state.user.showLoader)
  const alert = useSelector((state: RootState) => state.user.alert)
  const users = useSelector((state: RootState) => state.user.usersData.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersThunk({}))
    dispatch(getRolesThunk())
  }, [dispatch])
  
  return <>
    {
      showLoader ? <Spinner /> :
        alert.showAlert ? <Alert text={alert.text} /> :
          !users.length ? <h3>Немає зареєстрованих користувачів</h3> :
            <UserList />
    }
  </>
}