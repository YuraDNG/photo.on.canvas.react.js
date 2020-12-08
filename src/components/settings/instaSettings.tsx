import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { getInstaConfigThunk, setInstaConfigThunk } from "../../store/instaSettings/actions"
import { IInstaSettings, InstaSettingsEnum } from "../../store/instaSettings/types"
import { Spinner } from "../general/spinner"
import { useInput } from "../../helpers/useInput"
import { passwordValidators, receiversValidators, usernameValidators } from "./instaValidations"
import { SubmitButton } from "../general/submitButton/submitButton"

import "./index.css"

export const InstaSettings: React.FC = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state: RootState) => state.instaSettings.alert)
  const showLoader = useSelector((state: RootState) => state.instaSettings.showLoader)
  const data: IInstaSettings = useSelector((state: RootState) => state.instaSettings.instaSettingsData)

  const username = useInput(data.username, usernameValidators)
  const password = useInput(data.password, passwordValidators)
  const msgReceivers = useInput(data.msgReceiverList)

  const changeSettings = (event: React.ChangeEvent<HTMLFormElement>) => {
    let formData = new FormData(event.target)

    event.preventDefault()
    dispatch(setInstaConfigThunk(formData))
  }

  useEffect(() => {
    dispatch(getInstaConfigThunk())
  }, [dispatch])

  useEffect(() => {
    username.set(data.username)
    password.set(data.password)
    msgReceivers.set(data.msgReceiverList)
  }, [data])

  return <>
    {
      showLoader
        ?
        <Spinner />
        :
        <form className="" onSubmit={changeSettings}>
          <h4 className="setting-head">Instagram Settings:</h4>

          <div className="form-group setting-group" style={username.style}>
            {username.error.length !== 0 &&
              <span className="error-span">{username.error}</span>
            }
            <label>Інстаграм логін</label>
            <input
              type="text"
              name={InstaSettingsEnum.username}
              className="form-control"
              placeholder="Введіть інстаграм логін "
              value={username.value}
              onChange={e => username.onChange(e)}
              onBlur={e => username.onBlur(e)}
            />
          </div>


          <div className="form-group setting-group" style={password.style}>
            {password.error.length !== 0 &&
              <span className="error-span">{password.error}</span>
            }
            <label>Інстаграм пароль</label>
            <input
              type="text"
              name={InstaSettingsEnum.password}
              className="form-control"
              placeholder="Введіть інстаграм пароль"
              value={password.value}
              onChange={e => password.onChange(e)}
              onBlur={e => password.onBlur(e)}
            />
          </div>


          <div className="form-group setting-group" style={msgReceivers.style}>
            {msgReceivers.error.length !== 0 &&
              <span className="error-span">{msgReceivers.error}</span>
            }
            <label>Список отримувачів повідомлень про покупку</label>
            <input
              type="text"
              name={InstaSettingsEnum.msgReceiverList}
              className="form-control"
              placeholder="Введіть інстаграм імя отримувачів повідомлень"
              value={msgReceivers.value}
              onChange={e => msgReceivers.onChange(e)}
              onBlur={e => msgReceivers.onBlur(e)}
            />
          </div>

          <SubmitButton text="Зберегти" />

        </form>
    }
  </>
}