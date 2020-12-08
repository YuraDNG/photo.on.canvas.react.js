import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useInput } from "../../helpers/useInput"
import { RootState } from "../../store"
import { getEmailConfigThunk, setEmailConfigThunk } from "../../store/emailSettings/actions"
import { EmailSettingsEnum, IEmailSettings, IEmailSettingsState } from "../../store/emailSettings/types"
import { Spinner } from "../general/spinner"
import { SubmitButton } from "../general/submitButton/submitButton"

export const EmailSettings: React.FC = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state: RootState) => state.emailSettings.alert)
  const showLoader = useSelector((state: RootState) => state.emailSettings.showLoader)
  const data: IEmailSettings = useSelector((state: RootState) => state.emailSettings.emailSettingsData)

  const serviceIsOn = useInput(data.serviceIsOn)
  const from = useInput(data.from)
  const smtpServer = useInput(data.smtpServer)
  const port = useInput(data.port)
  const userName = useInput(data.userName)
  const password = useInput(data.password)
  
  const changeEmailSettings = (event: React.ChangeEvent<HTMLFormElement>) => {
    let formData = new FormData(event.target)

    event.preventDefault()
    dispatch(setEmailConfigThunk(formData))
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
        <form className="" onSubmit={changeEmailSettings}>
          <h4 className="setting-head">Email Settings:</h4>

          <div className="form-group setting-group">
            {serviceIsOn.error.length !== 0 &&
              <span className="error-span">{serviceIsOn.error}</span>
            }
            <label>Увімкнути email підтвердження реєстрації</label>
            <input
              type="checkbox"
              name={EmailSettingsEnum.serviceIsOn}
              className="form-control m-3"
              checked={serviceIsOn.value}
              onChange={e => serviceIsOn.onChange(e)}
              onBlur={e => serviceIsOn.onBlur(e)}
            />
          </div>

          <div className="form-group setting-group">
            {from.error.length !== 0 &&
              <span className="error-span">{from.error}</span>
            }
            <label>Від кого:</label>
            <input
              type="text"
              name={EmailSettingsEnum.from}
              className="form-control"
              placeholder="Від кого"
              value={from.value}
              onChange={e => from.onChange(e)}
              onBlur={e => from.onBlur(e)}
            />
          </div>

          <div className="form-group setting-group">
            {smtpServer.error.length !== 0 &&
              <span className="error-span">{smtpServer.error}</span>
            }
            <label>Smtp server:</label>
            <input
              type="text"
              name={EmailSettingsEnum.smtpServer}
              className="form-control"
              placeholder="SMTP Server"
              value={smtpServer.value}
              onChange={e => smtpServer.onChange(e)}
              onBlur={e => smtpServer.onBlur(e)}
            />
          </div>

          <div className="form-group setting-group">
            {port.error.length !== 0 &&
              <span className="error-span">{port.error}</span>
            }
            <label>Порт:</label>
            <input
              type="text"
              name={EmailSettingsEnum.port}
              className="form-control"
              placeholder="Порт"
              value={port.value}
              onChange={e => port.onChange(e)}
              onBlur={e => port.onBlur(e)}
            />
          </div>

          <div className="form-group setting-group">
            {userName.error.length !== 0 &&
              <span className="error-span">{userName.error}</span>
            }
            <label>Email адрес:</label>
            <input
              type="text"
              name={EmailSettingsEnum.userName}
              className="form-control"
              placeholder="Email"
              value={userName.value}
              onChange={e => userName.onChange(e)}
              onBlur={e => userName.onBlur(e)}
            />
          </div>

          <div className="form-group setting-group">
            {password.error.length !== 0 &&
              <span className="error-span">{password.error}</span>
            }
            <label>Пароль:</label>
            <input
              type="text"
              name={EmailSettingsEnum.password}
              className="form-control"
              placeholder="Пароль"
              value={password.value}
              onChange={e => password.onChange(e)}
              onBlur={e => password.onBlur(e)}
            />
          </div>

          <SubmitButton text="Зберегти" />
        </form>
    }
  </>
}