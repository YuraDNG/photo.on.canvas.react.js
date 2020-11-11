import React, { FormHTMLAttributes, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { getEmailConfigThunk, setEmailConfigThunk } from "../store/emailSettings/actions"
import { IEmailSettings, IEmailSettingsState } from "../store/emailSettings/types"
import { Spinner } from "./general/spinner"

export const EmailSettings: React.FC = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state: RootState) => state.emailSettings.alert)
  const showLoader = useSelector((state: RootState) => state.emailSettings.showLoader)
  const data: IEmailSettings = useSelector((state: RootState) => state.emailSettings.emailSettingsData)
  const [emailConfig, setEmailConfig] = useState<IEmailSettings>({...data})
  
  const changeEmailSettings = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setEmailConfigThunk(emailConfig))
  }

  useEffect(() => {
    dispatch(getEmailConfigThunk())
  }, [dispatch])

  return <>
    {
      showLoader
      ?
      <Spinner />
      :
      <form className="custom-modal-body" onSubmit={e => changeEmailSettings(e)}>
        <div className="form-check">
          <label>Увімкнути email підтвердження реєстрації</label>
          <input
            type="checkbox"
            className="m-3"
            checked={data.serviceIsOn}
          />
        </div>

        <div className="form-group">
          <label>Від кого:</label>
          <input
            type="text"
            className="form-control"
            value={emailConfig.from}
            onChange={e => setEmailConfig({ ...emailConfig, from: e.currentTarget.value })}
          />
        </div>

        <div className="form-group">
          <label>Smtp server:</label>
          <input
            type="text"
            className="form-control"
            value={data.smtpServer}
          />
        </div>

        <div className="form-group">
          <label>Порт:</label>
          <input
            type="text"
            className="form-control"
            value={data.port}
          />

          <div className="form-group">
            <label>Email адрес:</label>
            <input
              type="text"
              className="form-control"
              value={data.userName}
            />
          </div>

          <div className="form-group">
            <label>Пароль:</label>
            <input
              type="text"
              className="form-control"
              value={data.password}
            />
          </div>

          <button className="btn btn-dark" type="submit">Зберегти</button>
        </div>
      </form>
    }
  </>
}